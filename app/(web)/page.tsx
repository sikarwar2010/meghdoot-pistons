import FrontPage from "@/components/layouts/home/FrontPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Meghdoot Pistons',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

export default function Home() {
    return (
        <div>
            <FrontPage />
        </div>
    );
}
