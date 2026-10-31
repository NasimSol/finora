import {
    Banknote,
    Utensils,
    CarFront,
    ShoppingBag,
    ReceiptText,
    HeartPulse,
    Clapperboard,
    Ellipsis,
} from "lucide-react";
import type {Category} from "@/features/transactions/types/transactions.type";




const categories: Category[] = [
    { id: 1, label: "salary", icon: Banknote },
    { id: 2, label: "food", icon: Utensils },
    { id: 3, label: "transport", icon: CarFront  },
    { id: 4, label: "shopping", icon: ShoppingBag  },
    { id: 5, label: "bills", icon: ReceiptText  },
    { id: 6, label: "health", icon: HeartPulse  },
    { id: 7, label: "entertainment", icon: Clapperboard },
    { id: 8, label: "other", icon: Ellipsis },
];

export default categories;