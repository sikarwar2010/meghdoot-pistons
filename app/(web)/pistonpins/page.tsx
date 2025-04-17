import React from 'react'
import PistonPinsPage from '@/components/layouts/products/PistonPins'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Piston Pins',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const Pistonpins = () => {
    return (
        <div>
            <PistonPinsPage />
        </div>
    )
}

export default Pistonpins;
