import React from 'react';
import ContactPage from '@/components/layouts/contact/ContactPage';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Contact = () => {
    return (
        <div>
            <ContactPage />
        </div>
    )
}

export default Contact;
