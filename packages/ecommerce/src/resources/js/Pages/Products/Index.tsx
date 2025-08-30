import React from 'react';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Ecommerce" />
            <div style={{ background: 'black' }}>
                <h1>Welcome to the Ecommerce Module!</h1>
                <p>This page is served from your modular structure.</p>
            </div>
        </>
    );
}