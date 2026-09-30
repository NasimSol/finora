import { create } from 'zustand';

import type {
    CreateTransactionInput,
    Transaction,
} from '@/features/transactions/types/transactions.type';
import {db} from "@/lib/db/database";

type TransactionStore = {
    transactions: Transaction[];

    isTransactionModalOpen: boolean;

    openCreateModal: () => void;
    closeTransactionModal: () => void;

    addTransaction: (data: CreateTransactionInput) => Promise<void>;
    deleteTransaction:(id:string)=>Promise<void>;
    editingTransaction: Transaction | null;
    openEditModal: (transaction: Transaction) => void;
    updateTransaction: (
        id: string,
        data: CreateTransactionInput
    ) => Promise<void>;
    loadTransactions: () => Promise<void>;
    isHydrated: boolean;

};

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],

    isTransactionModalOpen: false,
    editingTransaction:null,
    isHydrated: false,

    openCreateModal: () => {
        set({ isTransactionModalOpen: true,editingTransaction:null });
    },
    openEditModal: (transaction) => {
        set({  isTransactionModalOpen: true,
            editingTransaction: transaction });

    },

    closeTransactionModal: () => {
        set({ isTransactionModalOpen: false,editingTransaction: null, });

    },


    addTransaction: async (data) => {
        const transaction: Transaction = {
            id: crypto.randomUUID(),
            ...data,
        };
        await db.transactions.add(transaction);


        set((state) => ({
            transactions: [...state.transactions, transaction],
        }));
    },

    updateTransaction: async (id,data) => {
        await db.transactions.update(id, data);

        set((state) => ({
          transactions:state.transactions.map((transaction)=>
          transaction.id===id?{...transaction,...data}:transaction)
        }));
    },

    deleteTransaction: async (id) => {
        await db.transactions.delete( id);


        set((state) => ({
            transactions:state.transactions.filter((transaction)=>transaction.id!==id),
        }));
    },

    loadTransactions: async () => {
        try {
            const transactions = await db.transactions.toArray();
            set({
                transactions,
                isHydrated: true,
            });
        } catch (error) {

            set({
                isHydrated: true,
            });
        }
    },

}));