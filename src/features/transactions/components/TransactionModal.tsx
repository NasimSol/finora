'use client';

import Modal from '@/components/ui/Modal';

import TransactionForm from './TransactionForm';
import {CreateTransactionInput} from "@/features/transactions/types/transactions.type";
import {useTransactionStore} from "@/features/transactions/store/transaction.store";


type TransactionModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function TransactionModal({
                                             open,
                                             onClose,
                                         }: TransactionModalProps) {
    const editTransaction=useTransactionStore((state)=>state.editingTransaction,)
    const addTransaction = useTransactionStore(
        (state) => state.addTransaction,
    );
    const editingTransaction=useTransactionStore((state)=>state.editingTransaction)
    const updateTransaction=useTransactionStore((state)=>state.updateTransaction)

    const handleSubmit = (data: CreateTransactionInput) => {
        editingTransaction ? updateTransaction(editingTransaction.id, data) :addTransaction(data);
        onClose();
    };


    return (
        <Modal
            title={editingTransaction ? "edit Transaction":"Add Transaction"}
            onClose={onClose}
            open={open}
        >
            <TransactionForm onSubmit={handleSubmit}   initialValues={
                editTransaction
                    ? {
                        title: editTransaction.title,
                        category: editTransaction.category,
                        amount: editTransaction.amount,
                        type: editTransaction.type,
                    }
                    : undefined
            }/>
        </Modal>
    );
}