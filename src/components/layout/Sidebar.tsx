export default function Sidebar() {
    return (
        <aside className="hidden w-64 border-r border-border bg-surface p-6 md:block">
            <h1 className="text-2xl font-bold">Finora</h1>

            <nav className="mt-10 space-y-2">
                <div className="rounded-lg bg-card px-4 py-3">
                    Dashboard
                </div>

                <div className="px-4 py-3 text-muted">
                    Transactions
                </div>

                <div className="px-4 py-3 text-muted">
                    Analytics
                </div>

                <div className="px-4 py-3 text-muted">
                    Settings
                </div>
            </nav>
        </aside>
    );
}