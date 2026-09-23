'use client';

import Modal from '@/components/ui/Modal';

import TransactionForm from './TransactionForm';
import {CreateTransactionInput} from "@/features/transactions/types/transactions.type";


type TransactionModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function TransactionModal({
                                             open,
                                             onClose,
                                         }: TransactionModalProps) {
    const handleSubmit = (data: CreateTransactionInput) => {
        console.log(data);
    };

    return (
        <Modal
            title="Add Transaction"
            onClose={onClose}
            open={open}
        >
            <TransactionForm onSubmit={handleSubmit} />
        </Modal>
    );
}