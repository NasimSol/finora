'use client';

import Modal from '@/components/ui/Modal';
import {Button} from "@/components/ui/Button";
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
            <>{`are sure you want delete this ${id} transaction?`}</>
            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => closeDeleteModal()}
                    className="mt-2"
                >
                    Close
                </Button>
                <Button
                    type="button"
                    variant="destructive"
                    onClick={handleConfirmDelete}
                    className="mt-2"
                >
                    Delete
                </Button>


            </div>
        </Modal>
    );
}