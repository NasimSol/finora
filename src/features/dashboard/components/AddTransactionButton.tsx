'use client';
import { useTransactionStore } from '../../transactions/store/transaction.store'

import TransactionModal from "@/features/transactions/components/TransactionModal";
import {Button} from "@/components/ui/Button";

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
        <Button
            type="button"
            onClick={openCreateModal}
            className="h-10 cursor-pointer rounded-xl px-4 font-medium"
        >
            + Add Transaction
        </Button>
            {isTransactionModalOpen && (
               <TransactionModal open={isTransactionModalOpen}
                                 onClose={closeTransactionModal} />
            )}

        </>
    );
}