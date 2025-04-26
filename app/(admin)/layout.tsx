import DashboardPage from "@/components/layouts/dashboard/DashboardPage";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <DashboardPage>
                <main className="min-h-screen flex flex-col">{children}</main>
            </DashboardPage>
        </>
    );
}
