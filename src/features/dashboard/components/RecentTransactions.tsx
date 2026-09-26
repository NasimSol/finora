'use client';
import {useTransactionStore} from "@/features/transactions/store/transaction.store";

export default function RecentTransactions() {
    const transactions = useTransactionStore(
        (state) => state.transactions,
    );
    const deleteTransaction = useTransactionStore((state) => state.deleteTransaction);

    const openEditModal=useTransactionStore((state) => state.openEditModal);
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
                        <button
                            type="button"
                            onClick={() => deleteTransaction(transaction.id)}
                            className="cursor-pointer"
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            onClick={() => openEditModal(transaction)}
                            className="cursor-pointer"
                        >
                            Edit
                        </button>
                    </div>
                ))}


            </div>

        </section>
    );
}