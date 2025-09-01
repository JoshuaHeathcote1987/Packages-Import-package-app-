import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx', // your main app
                'packages/ecommerce/src/resources/js/app.tsx', // ✅ build this too
                // 'packages/ecommerce/src/resources/css/app.css', // If you have CSS
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),  // Add Tailwind plugin
        wayfinder({
            formVariants: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
            '@ecommerce': path.resolve(__dirname, 'packages/ecommerce/src/resources/js'),
            '@blog': path.resolve(__dirname, 'packages/blog/src/resources/js'),
          },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    esbuild: {
        jsx: 'automatic',
    },
});