# Cocktail Recipes - Interactive App

A beautifully crafted, high-performance interactive cocktail recipe browser. It matches home cabinet ingredients with classic recipes, helping you craft delicious drinks step-by-step.

## Prerequisites

- **Node.js**: `v20.x` or `v22.x` (Recommended)
- **NPM**: `v10.x` or higher

---

## Getting Started Locally

### 1. Install Dependencies

In the root of your project directory, run:

```bash
npm install
```

---

## Available Scripts

In the project directory, you can run the following commands:

### Development Mode
Runs the hybrid Express + Vite server with Hot Module Replacement (HMR) for the frontend:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build the Application
Compiles the React frontend into static assets inside `dist/`, and bundles the Node/TypeScript Express server cleanly into `dist/server.cjs` via `esbuild`:
```bash
npm run build
```

### Production Run
Starts the compiled Node production build:
```bash
npm start
```
This serves the application optimally from `dist/server.cjs` binding on port `3000`.

### Code Check (Linting)
Checks the TypeScript codebase for any type errors or safety warnings:
```bash
npm run lint
```

---

## Deploying to GitHub Pages

This app is fully compatible with static hosting (GitHub Pages). An automated **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) is included to publish the application seamlessly.

### Blank Page Issue & Base Paths:
* **For GitHub Pages (`https://<username>.github.io/<repository-name>/`)**: Vite needs to know the correct base directory for referencing built assets. If your app is served at `https://nikosathanasopoulos.github.io/myCoctailsWebapp/`, make sure `base` in your `vite.config.ts` matches `/myCoctailsWebapp/`.
* **For Local/Android WebViews**: Capacitor requires absolute-relative paths `./` so that files resolve correctly on the native device filesystem. The updated `vite.config.ts` currently uses `base: './'`, which is universally compatible with both local servers and Android Capacitor setups.

### How to set up GitHub Pages deployment:

1. Push this repository to your GitHub account on the `main` or `master` branch.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (instead of *Deploy from a branch*).
4. Any future push to your `main` branch will automatically trigger the workflow, build the static application, and deploy it to your GitHub Pages URL!

---

## Android Application (Capacitor)

We have integrated **Capacitor** to allow compiling and packaging this cocktail recipe web app into a fully-native Android application.

### Prerequisites for Android
- **Android Studio** installed on your development machine.
- **Java SE Development Kit (JDK 17 or higher)**.
- **Android SDK** configured within Android Studio.

### Available Capacitor Scripts

These scripts are added inside `package.json` to make native Android management easy:

#### 1. Synchronize Web Assets to Android
Creates the web production build and copies all assets (HTML/CSS/JS) into the Android native envelope:
```bash
npm run build
npm run cap:sync
```

#### 2. Open Project in Android Studio
Opens the native Android project in Android Studio, from where you can run it on an emulator or a physical device:
```bash
npm run cap:open
```

#### 3. Build & Package Android App (Debug APK)
Runs a full build of the web application, synchronizes the compiled output, and uses Gradle to compile the debut `.apk` package locally:
```bash
# This will build the web app and output an APK file under android/app/build/outputs/apk/debug/
npx vite build && npx cap sync && cd android && ./gradlew assembleDebug
```

---

## File Structure

- `/server.ts` — The entry-point of the full-stack application (Express server + Vite Dev Middleware).
- `/src/App.tsx` — Main React application layout.
- `/src/components/` — Modular React UI components (e.g. `CabinetDrawer.tsx`).
- `/src/translations.ts` — Bi-lingual translation dictionaries (English & Greek).
- `/src/data/` — Static recipes library grouped logically to stay lightweight.
