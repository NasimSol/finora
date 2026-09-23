import {Transaction} from "@/features/transactions/types/transactions.type";


export function calculateSummary(transactions: Transaction[]) {
    const income = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0);

    const expenses = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce(
            (total, transaction) => total + Math.abs(transaction.amount),
            0,
        );

    const balance = income - expenses;

    return {
        balance,
        income,
        expenses,
    };
}