import React from 'react';
import QualityPage from '@/components/layouts/quality/QualityPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quality',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Quality = () => {
    return (
        <div>
            <QualityPage />
        </div>
    )
}

export default Quality;
