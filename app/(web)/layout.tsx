import Footer from "@/components/layouts/Navigation/Footer";
import Header from "@/components/layouts/Navigation/Header";

export default function webLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Footer />
        </div>
    );
}
