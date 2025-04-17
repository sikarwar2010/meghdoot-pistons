import React from 'react';
import type { Metadata } from 'next';
import PistonRingsPage from '@/components/layouts/products/PistonRingsPage';

export const metadata: Metadata = {
    title: 'Piston Rings',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const PistonRings = () => {
    return (
        <div>
            <PistonRingsPage />
        </div>
    )
}

export default PistonRings;
