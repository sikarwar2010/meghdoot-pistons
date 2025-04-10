import React from 'react';
import type { Metadata } from 'next';
import EventsPage from '@/components/layouts/events/EventPage';

export const metadata: Metadata = {
    title: 'Events',
    description: 'Leading global exporter of precision-engineered automotive components since 1957, serving customers across 50+ countries with premium quality pistons, pins, rings, and cylinder liners.',
}

const Events = () => {
    return (
        <div>
            <EventsPage />
        </div>
    )
}

export default Events;
