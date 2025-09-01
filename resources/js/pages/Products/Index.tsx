import React from 'react';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Ecommerce" />
            <div className="min-h-screen bg-red-900 text-white p-8">
                <h1 className="text-4xl font-bold mb-4">This is the wrong page, stop looking here</h1>
                <p className="text-lg text-gray-300">This page is served from your modular structure.</p>
            </div>
        </>
    );
}