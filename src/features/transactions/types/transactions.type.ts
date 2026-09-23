export type TransactionType = 'income' | 'expense';

export type Transaction = {
    id: string;
    title: string;
    category: string;
    amount: number;
    type: TransactionType;
};

export type CreateTransactionInput = {
    title: string;
    category: string;
    amount: number;
    type: TransactionType;
};
