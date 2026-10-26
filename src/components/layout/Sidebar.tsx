export default function Sidebar() {
    return (
        <aside className="hidden w-64 border-r border-border bg-surface p-6 text-foreground md:block">
            <h1 className="text-2xl font-bold text-foreground">Finora</h1>

            <nav className="mt-10 space-y-2">
                <div className="rounded-lg bg-primary/10 px-4 py-3 font-medium text-primary">
                    Dashboard
                </div>

                <div className="px-4 py-3 text-muted-foreground">
                    Transactions
                </div>

                <div className="px-4 py-3 text-muted-foreground">
                    Analytics
                </div>

                <div className="px-4 py-3 text-muted-foreground">
                    Settings
                </div>
            </nav>
        </aside>
    );
}