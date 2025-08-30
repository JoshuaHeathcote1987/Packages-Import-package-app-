// packages/ecommerce/src/resources/js/ecommerce.jsx

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import ReactDOM from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Add this import

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        // Replace your manual logic with this single function call
        return resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx'));
    },
    setup({ el, App, props }) {
        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    },
});