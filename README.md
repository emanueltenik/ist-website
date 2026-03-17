# IST Web Project

A lightweight web app for the Institute of Software Technologies (IST) landing page built with HTML/CSS/JS.

## 🚀 Project Overview

This repository contains a simple static site (HTML, CSS, and JavaScript) for showcasing IST branding and information. It is designed to be easy to run locally and deploy as a static website using vite build tool.

## 📁 Project Structure

- `index.html`: Main page entry
- `src/styles/global.css`: Global styles
- `src/scripts/`: JavaScript logic (if any)
- `public/`: Static assets (images, icons)
- `package.json`: Project metadata and scripts
- `postcss.config.js`: Build config for CSS tooling (if used)

## ✅ Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in terminal (usually `http://localhost:5173`).

## 🔧 Build for Production

```bash
npm run build
```

Then preview the output (if configured):

```bash
npm run preview
```

## 🎨 Customize

- Update `index.html` with your page sections.
- Edit `src/styles/global.css` for typography, colors, spacing, and responsive layout.
- Add scripts to `src/scripts/` for interactive behavior.
- Replace images in `src/assets/` and `public/` with your own branding.

## 📌 Notes

- This is a static site suitable for deployment on GitHub Pages, Netlify, Vercel, or any static host.
- If using Vite or similar tooling, check `package.json` for framework-specific scripts.
