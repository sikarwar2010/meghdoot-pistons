import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Leading global exporter of precision-engineered automotive components since 1967, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Dashboard = () => {
    return (
        <>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50">
                    1
                </div>
                <div className="aspect-video rounded-xl bg-muted/50">
                    2
                </div>
                <div className="aspect-video rounded-xl bg-muted/50">
                    3
                </div>
            </div>
        </>
    )
}

export default Dashboard;
