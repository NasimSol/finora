import Dexie, { type Table } from 'dexie';

import type { Transaction } from '@/features/transactions/types/transactions.type';

class FinoraDatabase extends Dexie {
    transactions!: Table<Transaction, string>;

    constructor() {
        super('FinoraDB');

        this.version(1).stores({
            transactions: 'id',
        });
    }
}

export const db = new FinoraDatabase();