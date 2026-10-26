'use client';
import {useTransactionStore} from "@/features/transactions/store/transaction.store";
import ConfirmDeleteModal from "@/features/transactions/components/ConfirmDeleteModal";
import {Button} from "@/components/ui/Button";

export default function RecentTransactions() {
    const transactions = useTransactionStore(
        (state) => state.transactions,
    );
    const confirmDeleteOpen = useTransactionStore((state) => state.isConfirmDeleteModalOpen)
    const closeConfirmDelete = useTransactionStore((state) => state.closeConfirmModal)
    const openEditModal = useTransactionStore((state) => state.openEditModal);
    const openConfirmDeleteModal = useTransactionStore((state) => state.openConfirmModal)
    return (
        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold">
                Recent Transactions
            </h3>
            {transactions.length > 0 ? <div className="mt-6 space-y-4">
                {transactions.map((transaction) => (
                    <div key={transaction.id}
                         className="flex items-center justify-between">
                        <div>
                            <p>{transaction.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {transaction.category}
                            </p>
                        </div>

                        <span
                            className={
                                transaction.type === 'income'
                                    ? 'text-success'
                                    : 'text-danger'
                            }
                        >{transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount)}</span>
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={() => openConfirmDeleteModal(transaction.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => openEditModal(transaction)}
                            >
                                Edit
                            </Button>
                        </div>

                    </div>
                ))}


            </div> : <div className="mt-6 text-center text-sm text-muted-foreground">there is no transactions yet</div>}


            <ConfirmDeleteModal open={confirmDeleteOpen} onClose={() => closeConfirmDelete()}/>
        </section>
    );
}