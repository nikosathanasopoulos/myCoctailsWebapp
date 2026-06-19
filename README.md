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

This app is fully compatible with static hosting since all AI elements have been removed. We have included an automated **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) to publish the application seamlessly to GitHub Pages.

### How to set up GitHub Pages deployment:

1. Push this repository to your GitHub account on the `main` or `master` branch.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (instead of *Deploy from a branch*).
4. Any future push to your `main` (or `master`) branch will automatically trigger the workflow, build the static application, and deploy it to your GitHub Pages URL!

---

## File Structure

- `/server.ts` — The entry-point of the full-stack application (Express server + Vite Dev Middleware).
- `/src/App.tsx` — Main React application layout.
- `/src/components/` — Modular React UI components (e.g. `CabinetDrawer.tsx`).
- `/src/translations.ts` — Bi-lingual translation dictionaries (English & Greek).
- `/src/data/` — Static recipes library grouped logically to stay lightweight.
