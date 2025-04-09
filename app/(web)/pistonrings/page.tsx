import React from 'react';
import type { Metadata } from 'next';
import PistonRingsPage from '@/components/layouts/products/PistonRingsPage';

export const metadata: Metadata = {
    title: 'Piston Rings',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const PistonRings = () => {
    return (
        <div>
            <PistonRingsPage />
        </div>
    )
}

export default PistonRings;
