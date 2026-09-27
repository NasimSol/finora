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
    deleteTransaction:(id:string)=>void;
    editingTransaction: Transaction | null;
    openEditModal: (transaction: Transaction) => void;
    updateTransaction: (
        id: string,
        data: CreateTransactionInput
    ) => void
};

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],

    isCreateModalOpen: false,
    editingTransaction:null,

    openCreateModal: () => {
        set({ isCreateModalOpen: true,editingTransaction:null });
    },
    openEditModal: (transaction) => {
        set({  isCreateModalOpen: true,
            editingTransaction: transaction });

    },

    closeCreateModal: () => {
        set({ isCreateModalOpen: false,editingTransaction: null, });

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

    updateTransaction: (id,data) => {

        set((state) => ({
          transactions:state.transactions.map((transaction)=>
          transaction.id===id?{...transaction,...data}:transaction)
        }));
    },

    deleteTransaction: (data) => {


        set((state) => ({
            transactions:state.transactions.filter((transaction)=>transaction.id!==data),
        }));
    },

}));