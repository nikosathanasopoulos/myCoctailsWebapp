import http from 'k6/http';
import { check, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

// k6 options configuration
export const options = {
    // Define performance thresholds
    thresholds: {
        http_req_failed: ['rate<0.01'], // Fail if more than 1% of requests fail
        http_req_duration: ['p(95)<300'], // 95% of requests must complete under 300ms
    },

    // Define simulated user load stages
    stages: [
        { duration: '10s', target: 20 }, // Ramp-up: 0 to 20 virtual users in 30 seconds
        { duration: '20s', target: 20 }, // Plateau: Sustain 20 virtual users for 30 seconds
        { duration: '15s', target: 0 },  // Ramp-down: Smoothly scale down to 0 virtual users
    ],
};

// Base URL configuration (fallback to localhost:3000)
const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {
    // Scenario 1: Test Root Web Server / Frontend Application
    const webResponse = http.get(`${BASE_URL}/`);
    check(webResponse, {
        'web page loaded successfully': (r) => r.status === 200,
        'web responses contain brand text': (r) => r.body.includes('Cocktail Recipes') || r.body.includes('html'),
    });

    // Short pause between interactions to simulate real user behavior
    sleep(1);

    // Scenario 2: Test JSON API /api/health Endpoint
    const apiResponse = http.get(`${BASE_URL}/api/health`);
    check(apiResponse, {
        'api status is 200': (r) => r.status === 200,
        'api reports status ok': (r) => {
            try {
                const json = JSON.parse(r.body);
                return json.status === 'ok';
            } catch (e) {
                return false;
            }
        },
    });

    // Short pause before next iteration
    sleep(0.5);
}

// Custom summary exporter to write the results into a file and keep console logs
export function handleSummary(data) {
    delete data.metrics.http_req_tls_handshaking;
    delete data.metrics.http_req_receiving;
    delete data.metrics.http_req_connecting;
    delete data.metrics.http_req_waiting;
    delete data.metrics.http_req_sending;
    delete data.metrics.http_req_blocked;
    delete data.metrics.data_received;
    delete data.metrics.data_sent;
    return {
        "./summary.txt": textSummary(data, {
            indent: "→",
            enableColors: false,
        }),
        stdout: textSummary(data, { indent: "→", enableColors: true }),
        'performance-summary.json': JSON.stringify(data, null, 2),
    };
}