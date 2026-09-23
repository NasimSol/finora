'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {CreateTransactionInput} from "@/features/transactions/types/transactions.type";
import {transactionSchema} from "@/features/transactions/schema/transaction.schema";


type TransactionFormProps = {
    onSubmit: (data: CreateTransactionInput) => void;
};

export default function TransactionForm({
                                            onSubmit,
                                        }: TransactionFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateTransactionInput>({
        resolver: zodResolver(transactionSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >
            <div>
                <label
                    htmlFor="title"
                    className="mb-1 block text-sm font-medium"
                >
                    Title
                </label>

                <input
                    id="title"
                    {...register('title')}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2"
                />

                {errors.title && (
                    <p className="mt-1 text-sm text-danger">
                        {errors.title.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="category"
                    className="mb-1 block text-sm font-medium"
                >
                    Category
                </label>

                <input
                    id="category"
                    {...register('category')}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2"
                />

                {errors.category && (
                    <p className="mt-1 text-sm text-danger">
                        {errors.category.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="amount"
                    className="mb-1 block text-sm font-medium"
                >
                    Amount
                </label>

                <input
                    id="amount"
                    type="number"
                    {...register('amount', {
                        valueAsNumber: true,
                    })}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2"
                />

                {errors.amount && (
                    <p className="mt-1 text-sm text-danger">
                        {errors.amount.message}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="type"
                    className="mb-1 block text-sm font-medium"
                >
                    Type
                </label>

                <select
                    id="type"
                    {...register('type')}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2"
                >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                {errors.type && (
                    <p className="mt-1 text-sm text-danger">
                        {errors.type.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-primary px-4 py-2.5 font-medium transition hover:bg-primary-hover"
            >
                Add Transaction
            </button>
        </form>
    );
}