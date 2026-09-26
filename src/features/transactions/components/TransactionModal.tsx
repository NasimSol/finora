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
    const transactions=useTransactionStore((state)=>state.transactions,)
    const addTransaction = useTransactionStore(
        (state) => state.addTransaction,
    );
    const handleSubmit = (data: CreateTransactionInput) => {
        addTransaction(data);
        onClose();
    };

    return (
        <Modal
            title="Add Transaction"
            onClose={onClose}
            open={open}
        >
            <TransactionForm onSubmit={handleSubmit}  />
        </Modal>
    );
}