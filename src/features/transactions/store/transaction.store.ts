import { create } from 'zustand';

import type {
    CreateTransactionInput,
    Transaction,
} from '@/features/transactions/types/transactions.type';

type TransactionStore = {
    transactions: Transaction[];

    isCreateModalOpen: boolean;

    openCreateModal: () => void;
    closeCreateModal: () => void;

    addTransaction: (data: CreateTransactionInput) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],

    isCreateModalOpen: false,

    openCreateModal: () => {
        set({ isCreateModalOpen: true });
    },

    closeCreateModal: () => {
        set({ isCreateModalOpen: false });
    },

    addTransaction: (data) => {
        const transaction: Transaction = {
            id: crypto.randomUUID(),
            ...data,
        };

        set((state) => ({
            transactions: [...state.transactions, transaction],
        }));
    },
}));