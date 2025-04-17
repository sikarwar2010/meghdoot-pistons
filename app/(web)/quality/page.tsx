import React from 'react';
import QualityPage from '@/components/layouts/quality/QualityPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quality',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const Quality = () => {
    return (
        <div>
            <QualityPage />
        </div>
    )
}

export default Quality;
