import React from 'react'
import PistonsPage from '@/components/layouts/products/PistonsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pistons',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const Pistons = () => {
    return (
        <div>
            <PistonsPage />
        </div>
    )
}

export default Pistons;
