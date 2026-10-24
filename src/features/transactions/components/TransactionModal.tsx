'use client';

import Modal from '@/components/ui/Modal';

import TransactionForm from './TransactionForm';
import type {CreateTransactionInput} from "@/features/transactions/types/transactions.type";
import {useTransactionStore} from "@/features/transactions/store/transaction.store";


type TransactionModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function TransactionModal({
                                             open,
                                             onClose,
                                         }: TransactionModalProps) {
    const addTransaction = useTransactionStore(
        (state) => state.addTransaction,
    );
    const editingTransaction=useTransactionStore((state)=>state.editingTransaction)
    const updateTransaction=useTransactionStore((state)=>state.updateTransaction)

    const handleSubmit = async (data: CreateTransactionInput) => {
        let success: boolean;

        if (editingTransaction) {
            success = await updateTransaction(editingTransaction.id, data);
        } else {
            success = await addTransaction(data);
        }

        if (success) {
            onClose();
        }
    };


    return (
        <Modal
            title={editingTransaction ? "edit Transaction":"Add Transaction"}
            onClose={onClose}
            open={open}
        >
            <TransactionForm
                onSubmit={handleSubmit}
                isEditing={Boolean(editingTransaction)}
                initialValues={
                    editingTransaction
                    ? {
                        title: editingTransaction.title,
                        category: editingTransaction.category,
                        amount: editingTransaction.amount,
                        type: editingTransaction.type,
                    }
                    : undefined
            }/>
        </Modal>
    );
}