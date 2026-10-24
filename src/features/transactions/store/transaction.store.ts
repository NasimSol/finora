import { create } from 'zustand';

import type {
    CreateTransactionInput,
    Transaction,
} from '@/features/transactions/types/transactions.type';
import {db} from "@/lib/db/database";

type TransactionStore = {
    transactions: Transaction[];
    transactionToDeleteId: string | null;
    isTransactionModalOpen: boolean;
    isConfirmDeleteModalOpen: boolean;

    openCreateModal: () => void;
    openConfirmModal:(id:string)=>void;
    closeTransactionModal: () => void;

    addTransaction: (data: CreateTransactionInput) => Promise<boolean>;
    deleteTransaction:(id:string)=>Promise<boolean>;
    editingTransaction: Transaction | null;
    openEditModal: (transaction: Transaction) => void;
    closeConfirmModal:()=>void;
    updateTransaction: (
        id: string,
        data: CreateTransactionInput
    ) => Promise<boolean>;
    loadTransactions: () => Promise<void>;
    isHydrated: boolean;
    error: string | null;
    clearError: () => void;

};

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],
    transactionToDeleteId:null,
    isTransactionModalOpen: false,
    editingTransaction:null,
    isHydrated: false,
    isConfirmDeleteModalOpen: false,
    error:null,
    clearError: () => {
        set({ error: null });
    },

    openCreateModal: () => {
        set({ isTransactionModalOpen: true,editingTransaction:null });
    },
    openConfirmModal:(id)=> {
        set({isConfirmDeleteModalOpen:true, transactionToDeleteId: id,
            error: null,});
    },
    closeConfirmModal: () => {
        set({
            isConfirmDeleteModalOpen: false,
            transactionToDeleteId: null,
        });
    },
    openEditModal: (transaction) => {
        set({  isTransactionModalOpen: true,
            editingTransaction: transaction });

    },

    closeTransactionModal: () => {
        set({ isTransactionModalOpen: false,editingTransaction: null, });

    },


    addTransaction: async (data) => {
        set({ error: null });

        try{
            const transaction: Transaction = {
                id: crypto.randomUUID(),
                ...data,
            };

            await db.transactions.add(transaction);


            set((state) => ({
                transactions: [...state.transactions, transaction],
            }));
            return true;
        } catch(error){
            console.error('Failed to add transaction:', error);

            set({error:'Failed to add transaction. Please try again.'});
            return false;
        }


    },

    updateTransaction: async (id,data) => {
        set({ error: null });
        try{
            await db.transactions.update(id, data);

            set((state) => ({
                transactions:state.transactions.map((transaction)=>
                    transaction.id===id?{...transaction,...data}:transaction)
            }));
            return true;
        }catch (error){
            console.error('Failed to update transaction:', error);

            set({error:'Failed to update transaction. Please try again.'});
            return false;

        }

    },

    deleteTransaction: async (id) => {
        set({ error: null });

        try{
            await db.transactions.delete( id);


            set((state) => ({
                transactions:state.transactions.filter((transaction)=>transaction.id!==id),
            }));
            return true;
        }catch (error){
            console.error('Failed to delete transaction:', error);

            set({error:'Failed to delete transaction. Please try again.'});
            return false;
        }

    },

    loadTransactions: async () => {
        set({ error: null });
        try {
            const transactions = await db.transactions.toArray();
            set({
                transactions,
                isHydrated: true,
            });
        } catch (error) {
            console.error('Failed to load transactions:', error);


            set({
                error: 'Failed to load transactions. Please refresh the page.',

                isHydrated: true,
            });
        }
    },

}));