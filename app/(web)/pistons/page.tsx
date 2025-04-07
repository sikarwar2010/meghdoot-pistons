import React from 'react'
import PistonsPage from '@/components/layouts/products/PistonsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pistons',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Pistons = () => {
    return (
        <div>
            <PistonsPage />
        </div>
    )
}

export default Pistons;
