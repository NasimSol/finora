import {SummaryCardType} from "@/features/dashboard/type";

const summaryCardConfig = {
    balance: {
        label: 'Total Balance',
        icon: '💰',
        color:'text-foreground',
        iconBackground: 'bg-card',
    },
    income: {
        label: 'Income',
        icon: '↗',
        color:'text-success',
        iconBackground: 'bg-emerald-400/10',

    },
    expense: {
        label: 'Expenses',
        icon: '↘',
        color:'text-danger',
        iconBackground: 'bg-rose-400/10',

    },
} as const;


export default function SummaryCard({value,
                                        type,
                                    }:  Omit<SummaryCardType, 'title'>) {
    const config=summaryCardConfig[type];

    return (
        <div className="rounded-2xl border border-border bg-card p-6 transition hover:bg-surface">
            <div className="flex items-center gap-3">
                <span  className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.iconBackground}`}>{config.icon}</span>
            <p className="text-sm text-muted">
                {config.label}
            </p>
            </div>
            <p className={`mt-3 text-3xl font-bold ${config.color}`}>
                {value}
            </p>

        </div>
    );
}