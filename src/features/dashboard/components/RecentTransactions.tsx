import {transactions} from "@/features/transactions/data/transactions";

export default function RecentTransactions() {
    return (
        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold">
                Recent Transactions
            </h3>


            <div className="mt-6 space-y-4">
                {transactions.map((transaction) => (
                    <div  key={transaction.id}
                          className="flex items-center justify-between">
                        <div>
                            <p>{transaction.title}</p>
                            <p className="text-sm text-muted">
                                {transaction.category}
                            </p>
                        </div>
                        <span
                            className={
                                transaction.type === 'income'
                                    ? 'text-emerald-400'
                                    : 'text-rose-400'
                            }
                        >{transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}</span>

                    </div>
                ))}


            </div>

        </section>
    );
}