import React from 'react'
import PistonPinsPage from '@/components/layouts/products/PistonPins'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Piston Pins',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Pistonpins = () => {
    return (
        <div>
            <PistonPinsPage />
        </div>
    )
}

export default Pistonpins;
