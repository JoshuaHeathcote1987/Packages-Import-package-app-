import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// 1️⃣ Host app pages
const hostPages = import.meta.glob('./pages/**/*.tsx');

// 2️⃣ Automatically detect package pages
// Assumes structure: packages/<name>/src/resources/js/pages/**/*.tsx
const packagePagesGlob = import.meta.glob('../../packages/*/src/resources/js/pages/**/*.tsx');

// Map of packages
const packages: Record<string, Record<string, () => Promise<any>>> = {};

for (const path in packagePagesGlob) {
    const match = path.match(/packages\/([^/]+)\/src\/resources\/js\/pages\/(.+)\.tsx$/i);
    if (!match) continue;

    const [, pkgName, pagePath] = match;
    const normalizedPath = pagePath.replace(/\\/g, '/').toLowerCase(); // keep subfolders

    if (!packages[pkgName.toLowerCase()]) packages[pkgName.toLowerCase()] = {};
    packages[pkgName.toLowerCase()][normalizedPath] = packagePagesGlob[path];
}


// 3️⃣ Generic resolver
const resolve = async (name: string) => {
    const [pkg, ...rest] = name.split('/');
    const pagePath = rest.join('/').toLowerCase(); // will be "ecommerce/index"

    if (pkg && packages[pkg.toLowerCase()]) {
        const pages = packages[pkg.toLowerCase()];
        if (!pages[pagePath]) throw new Error(`Page not found in package "${pkg}": ${pagePath}`);
        const mod = await pages[pagePath]();
        return (mod as { default: any }).default;
    }

    // fallback to host app
    return resolvePageComponent(`./pages/${name}.tsx`, hostPages);
};


// 4️⃣ React root
let root: ReturnType<typeof createRoot> | null = null;

createInertiaApp({
    title: title => title ? `${title} - ${appName}` : appName,
    resolve,
    setup({ el, App, props }) {
        if (!root) root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: { color: '#4B5563' },
});

// 5️⃣ Theme initialization
initializeTheme();
