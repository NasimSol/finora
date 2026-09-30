'use client';

import DashboardHeader from './DashboardHeader';
import RecentTransactions from './RecentTransactions';
import SummaryCards from './SummaryCards';

import { useTransactionStore } from '@/features/transactions/store/transaction.store';

export default function Dashboard() {
    const isHydrated = useTransactionStore(
        (state) => state.isHydrated,
    );

    if (!isHydrated) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <DashboardHeader />
            <SummaryCards />
            <RecentTransactions />
        </>
    );
}