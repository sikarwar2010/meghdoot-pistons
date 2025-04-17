import FrontPage from "@/components/layouts/home/FrontPage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Meghdoot Pistons',
    description: 'Piston manufacturer in India, Agra,Suitable for Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines,Deutz, Perkins, Belarus, Ford, Fiat, Kraz, Kamaz, Iveco, International(IHC), Massey Ferguson, Kubota, Yanmar, Same, Lombardini, Hatz, Zetor, Volvo, Meredes-Benz, MAN, MTZ, New Holland, Fordson',
}

export default function Home() {
    return (
        <div>
            <FrontPage />
        </div>
    );
}
