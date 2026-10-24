'use client';

import Modal from '@/components/ui/Modal';
import {useTransactionStore} from "@/features/transactions/store/transaction.store";


type TransactionModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function ConfirmDeleteModal({
                                               open,
                                               onClose,
                                           }: TransactionModalProps) {

    const deleteTransaction = useTransactionStore(
        (state) => state.deleteTransaction
    );
    const closeDeleteModal = useTransactionStore(
        (state) => state.closeConfirmModal
    );
    const id = useTransactionStore((state) => state.transactionToDeleteId);
    const handleConfirmDelete = async () => {
        if (!id) return;

        const success = await deleteTransaction(id);
        if (success) {
            closeDeleteModal();
        }

    };

    return (
        <Modal
            title={"delete transaction"}
            onClose={onClose}
            open={open}
        >
            <>are sure you want delete this transaction?</>
            <div className="flex gap-4">
                <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="cursor-pointer"
                >
                    Delete
                </button>

            </div>
        </Modal>
    );
}