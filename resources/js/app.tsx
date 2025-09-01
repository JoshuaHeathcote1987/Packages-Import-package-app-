import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const ecommercePages = import.meta.glob('@ecommerce/pages/**/*.tsx');

const resolve = (name: string) => {
    if (name.toLowerCase().startsWith('ecommerce/')) {
        const pageName = name.replace(/^ecommerce\//i, '');

        const importPath = Object.keys(ecommercePages).find((key) =>
            key.endsWith(`${pageName}.tsx`)
        );

        if (!importPath) {
            throw new Error(`Page not found: ${name}`);
        }

        return ecommercePages[importPath]().then((m) => m.default);
    }

    // Host app pages
    return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'));
};

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve,
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
