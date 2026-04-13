# Travel Agency Frontend

## Overview
A single-page frontend application built with React and Vite. The project demonstrates a modern, component-based architecture using TailwindCSS and DaisyUI for styling, along with client-side routing.

## Features
- Route-based navigation (React Router)
- Reusable UI components
- Responsive layout with TailwindCSS and DaisyUI
- Dynamic destination detail pages (slug-based routing)
- Simple contact form (UI only, no submission logic)

## Tech Stack
- React
- Vite
- TailwindCSS
- DaisyUI
- React Router
- ESLint
- Prettier

## Project Structure
```
src/
├── components/
│   ├── layout/
│   ├── ui/
│   └── common/
├── pages/
├── router/
├── data/
├── hooks/
├── utils/
├── styles/
├── App.jsx
└── main.jsx
```

## Branch Strategy
- main: stable branch
- feat/*: new features
- fix/*: bug fixes
- refactor/*: code refactoring
- chore/*: tooling/config changes

## Commit Convention
Format:
```
type(scope): summary
```

Examples:
- feat(home): add hero section
- fix(navbar): correct mobile layout
- refactor(components): split UI and layout
- chore(init): setup project

## Getting Started
```bash
npm install
npm run dev
```

## Future Improvements
- API integration
- Filtering and sorting
- Booking functionality
- State management
- Testing

## Description (English)
Built a single-page frontend application using React and Vite, implementing client-side routing, reusable components, and responsive UI with TailwindCSS and DaisyUI.

## Beschreibung (Deutsch)
Entwicklung einer Single-Page-Frontend-Anwendung mit React und Vite, inklusive Routing, wiederverwendbarer Komponenten und responsivem UI mit TailwindCSS und DaisyUI.
