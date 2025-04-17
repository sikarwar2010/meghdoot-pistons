import React from 'react';
import ContactPage from '@/components/layouts/contact/ContactPage';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const Contact = () => {
    return (
        <div>
            <ContactPage />
        </div>
    )
}

export default Contact;
