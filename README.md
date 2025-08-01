# Django-Inertia Starter Kit

This starter kit is a simple Django project with a React frontend using Inertia.

Inertia allows you to build modern, single-page React applications using server-side routing and controllers.

This React starter kit utilizes React 19, TypeScript, Tailwind and shadcn/ui, based on the Laravel and Ruby on Rails starter kits. It uses modern tooling on both the TypeScript and Python sides:

- pnpm for TypeScript package management
- Biome/Ultracite for TypeScript formatting and linting
- uv for Python package management
- ruff for Python linting
- ty for Python type checking

It includes a basic landing page, a signin/signup page, and a dashboard page. It does NOT implement proper authentication.

## Getting Started

You can get started by having the preferred tooling installed:

- [pnpm](https://pnpm.io/)
- [uv](https://astral.sh/uv)

Then, install the dependencies:

```bash
pnpm install
uv install
```

After that, you can run the development server:

```bash
pnpm dev:ssr
```

This will start both the Vite server and the Django server in parallel. Visit `http://127.0.0.1:56000` to see your new app!