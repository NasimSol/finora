'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type {CreateTransactionInput} from "@/features/transactions/types/transactions.type";
import {transactionSchema} from "@/features/transactions/schema/transaction.schema";
import categories from "@/features/transactions/data/categories";
import {Button} from "@/components/ui/Button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import { Controller, useForm } from 'react-hook-form';

type TransactionFormProps = {
    initialValues?: CreateTransactionInput;
    onSubmit: (data: CreateTransactionInput) => void | Promise<void>;
    isEditing?: boolean;
};

const controlClassName =
    "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export default function TransactionForm({initialValues,
                                            onSubmit,
                                            isEditing = false,
                                        }: TransactionFormProps) {
    const {
        control,
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
                    className={controlClassName}
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

                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger
                                    id="category"
                                    className="w-full transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                                    onBlur={field.onBlur}
                                >
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>

                                <SelectContent>
                                    {categories.map((category) => {
                                        const Icon = category.icon;

                                        return (
                                            <SelectItem
                                                key={category.id}
                                                value={category.label}
                                            >
                                                <Icon size={16} />
                                                <span>{category.label}</span>
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        )}
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
                    className={controlClassName}
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
                    className={controlClassName}
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