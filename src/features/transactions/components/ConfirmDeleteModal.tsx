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
            <>{`are sure you want delete this ${id} transaction?`}</>
            <div className="flex justify-end ">
                <button
                    type="button"
                    onClick={()=>closeDeleteModal()}
                    className="mr-2 rounded-xl bg-white px-4 py-2 font-medium text-slate-950 transition hover:bg-slate-200 cursor-pointer mt-2"
                >
                    close
                </button>
                <button
                    type="submit"
                    onClick={handleConfirmDelete}
                    className="rounded-xl bg-primary px-4 py-2 font-medium transition hover:bg-primary-hover mt-2"
                >
                    Delete
                </button>


            </div>
        </Modal>
    );
}