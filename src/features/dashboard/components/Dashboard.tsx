import DashboardHeader from './DashboardHeader';
import RecentTransactions from './RecentTransactions';
import SummaryCards from './SummaryCards';

import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <DashboardHeader />
            <SummaryCards />
            <RecentTransactions />
        </DashboardLayout>
    );
}