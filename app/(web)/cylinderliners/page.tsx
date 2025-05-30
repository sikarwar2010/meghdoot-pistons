import React from 'react'
import CylinderLinersPage from '@/components/layouts/products/CylinderLinerPage';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cylinder Liners',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Cylinderliners = () => {
    return (
        <div>
            <CylinderLinersPage />
        </div>
    )
}

export default Cylinderliners;
