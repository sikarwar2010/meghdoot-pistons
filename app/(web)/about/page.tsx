import React from 'react';
import AboutPage from "@/components/layouts/abouts/AboutPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

const About = () => {

    return (
        <div>
            <AboutPage />
        </div>
    )
}

export default About;
