import { z } from 'zod';

export const transactionSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title is too long'),

    amount: z
        .number()
        .positive('Amount must be greater than zero'),

    category: z
        .string()
        .min(1, 'Category is required'),

    type: z.enum(['income', 'expense']),
});