import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import ReactDOM from 'react-dom/client';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.{jsx,tsx}');
        const page = pages[`./Pages/${name}.tsx`] || pages[`./Pages/${name}.jsx`];
        
        if (!page) {
            throw new Error(`Page ${name} not found.`);
        }
        
        return page();
    },
    setup({ el, App, props }) {
        const root = ReactDOM.createRoot(el);
        root.render(<App {...props} />);
    },
});