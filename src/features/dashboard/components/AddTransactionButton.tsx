'use client';
import { useTransactionStore } from '../../transactions/store/transaction.store'

import TransactionModal from "@/features/transactions/components/TransactionModal";

export default function AddTransactionButton() {
    const isCreateModalOpen = useTransactionStore(
        (state) => state.isCreateModalOpen,)
    const openCreateModal = useTransactionStore(
        (state) => state.openCreateModal,
    );

    const closeCreateModal = useTransactionStore(
        (state) => state.closeCreateModal,
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
            {isCreateModalOpen && (
               <TransactionModal open={isCreateModalOpen}
                                 onClose={closeCreateModal} />
            )}

        </>
    );
}