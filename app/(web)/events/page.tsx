import React from 'react';
import type { Metadata } from 'next';
import EventsPage from '@/components/layouts/events/EventPage';

export const metadata: Metadata = {
    title: 'Events',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const Events = () => {
    return (
        <div>
            <EventsPage />
        </div>
    )
}

export default Events;
