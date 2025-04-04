import React from "react";
import AboutPage from "@/components/layouts/abouts/AboutPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const About = () => {

    return (
        <div>
            <AboutPage />
        </div>
    )
}

export default About;
