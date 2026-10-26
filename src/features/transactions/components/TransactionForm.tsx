'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type {CreateTransactionInput} from "@/features/transactions/types/transactions.type";
import {transactionSchema} from "@/features/transactions/schema/transaction.schema";
import categories from "@/features/transactions/data/categories";
import {Button} from "@/components/ui/Button";


type TransactionFormProps = {
    initialValues?: CreateTransactionInput;
    onSubmit: (data: CreateTransactionInput) => void | Promise<void>;
    isEditing?: boolean;
};

export default function TransactionForm({initialValues,
                                            onSubmit,
                                            isEditing = false,
                                        }: TransactionFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateTransactionInput>({
        defaultValues: initialValues,
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
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
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

                <select
                    id="category"
                    {...register('category')}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.label}>
                            {category.label}
                        </option>
                    ))}
                </select>

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
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
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
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground"
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

            <Button
                type="submit"
                className="h-10 w-full rounded-xl px-4 font-medium"
            >
                {isEditing ? 'Update Transaction' : 'Add Transaction'}
            </Button>
        </form>
    );
}