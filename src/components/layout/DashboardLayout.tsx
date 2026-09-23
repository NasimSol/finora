import Sidebar from "@/components/layout/Sidebar";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({
                                            children,
                                        }: DashboardLayoutProps) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="flex min-h-screen">
                <Sidebar/>
                <section className="flex-1 p-6 md:p-10">
                    {children}
                </section>
            </div>
        </main>
    );
}