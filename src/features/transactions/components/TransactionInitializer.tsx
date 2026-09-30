'use client';

import { useEffect } from 'react';

import { useTransactionStore } from '../store/transaction.store';

export default function TransactionInitializer() {
    const loadTransactions = useTransactionStore(
        (state) => state.loadTransactions,
    );

    useEffect(() => {

        loadTransactions();
    }, [loadTransactions]);

    return null;
}