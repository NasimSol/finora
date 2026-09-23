import {SummaryCardType} from "@/features/dashboard/type";
import {transactions} from "@/features/transactions/data/transactions";
import {calculateSummary} from "@/features/dashboard/utils/calculateSummary";
import {formatCurrency} from "@/lib/utils/formatCurrency";
import SummaryCard from "@/features/dashboard/components/SummaryCard";

const summary = calculateSummary(transactions);

const summaryCards: SummaryCardType[] = [
    {
        title: 'Total Balance',
        value: formatCurrency(summary.balance),
        type: 'balance',
    },
    {
        title: 'Income',
        value: formatCurrency(summary.income),
        type: 'income',
    },
    {
        title: 'Expenses',
        value: formatCurrency(summary.expenses),
        type: 'expense',
    },
];

export default function SummaryCards() {
    return (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
            {summaryCards.map((card) => (
                <SummaryCard
                    key={card.type}
                    value={card.value}
                    type={card.type}
                />
            ))}
        </div>
    );
}