'use client';
import { useTransactionStore } from '../../transactions/store/transaction.store'

import TransactionModal from "@/features/transactions/components/TransactionModal";

export default function AddTransactionButton() {
    const isTransactionModalOpen = useTransactionStore(
        (state) => state.isTransactionModalOpen,)
    const openCreateModal = useTransactionStore(
        (state) => state.openCreateModal,
    );

    const closeTransactionModal = useTransactionStore(
        (state) => state.closeTransactionModal,
    );

    return (
        <>
        <button
            type="button"
            onClick={openCreateModal}
            className="rounded-xl bg-white px-4 py-2.5 font-medium text-slate-950 transition hover:bg-slate-200 cursor-pointer"
        >
            + Add Transaction
        </button>
            {isTransactionModalOpen && (
               <TransactionModal open={isTransactionModalOpen}
                                 onClose={closeTransactionModal} />
            )}

        </>
    );
}