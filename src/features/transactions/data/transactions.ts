import {Transaction} from "@/features/transactions/types/transactions.type";


export const transactions: Transaction[] = [
    {
        id: '1',
        title: 'Restaurant',
        category: 'Food',
        amount: -32,
        type: 'expense',
    },
    {
        id: '2',
        title: 'Shopping',
        category: 'Shopping',
        amount: -120,
        type: 'expense',
    },
    {
        id: '3',
        title: 'Salary',
        category: 'Salary',
        amount: 4200,
        type: 'income',
    },
];