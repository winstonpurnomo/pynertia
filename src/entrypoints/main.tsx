import { createInertiaApp } from '@inertiajs/react';
import { createElement, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from '../layouts/__root';

interface ResolvedComponent {
  default: ReactNode & { layout?: (page: ReactNode) => ReactNode };
}

document.addEventListener('DOMContentLoaded', () => {
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob<ResolvedComponent>('../pages/**/*.tsx', {
        eager: true,
      });
      const page = pages[`../pages/${name}.tsx`];
      if (!page) {
        throw new Error(`Page not found: ${name}`);
      }

      page.default.layout ??= (currPage) =>
        createElement(RootLayout, null, currPage);
      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
  });
});
