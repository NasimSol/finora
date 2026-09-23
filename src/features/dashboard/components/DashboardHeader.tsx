import AddTransactionButton from "@/features/dashboard/components/AddTransactionButton";

export default function DashboardHeader() {
    return (
        <header className="flex items-center justify-between">
            <div>
                <p className="text-sm text-muted">
                    Welcome back
                </p>

                <h2 className="mt-1 text-3xl font-bold">
                    Good morning 👋
                </h2>

                <p className="mt-2 text-muted">
                    Here&apos;s your financial overview.
                </p>
            </div>

         <AddTransactionButton/>
        </header>
    );
}