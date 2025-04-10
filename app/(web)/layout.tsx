import Footer from "@/components/layouts/Navigation/Footer";
import Header from "@/components/layouts/Navigation/Header";
import TopBar from "@/components/layouts/Navigation/TopBar";
import { Toaster } from "@/components/ui/sonner";

export default function webLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <TopBar />
            <Header />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Toaster />
            <Footer />
        </div>
    );
}
