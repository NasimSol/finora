import { create } from 'zustand';

type TransactionStore = {
    isCreateModalOpen: boolean;

    openCreateModal: () => void;
    closeCreateModal: () => void;
};

export const useTransactionStore = create<TransactionStore>(
    (set) => ({
        isCreateModalOpen: false,

        openCreateModal: () => {
            set({ isCreateModalOpen: true });
        },

        closeCreateModal: () => {
            set({ isCreateModalOpen: false });
        },
    }),
);