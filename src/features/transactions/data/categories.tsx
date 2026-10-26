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
    { id: 1, label: "Salary", icon: <Banknote/> },
    { id: 2, label: "Food", icon: <Utensils/> },
    { id: 3, label: "Transport", icon: <CarFront /> },
    { id: 4, label: "Shopping", icon: <ShoppingBag /> },
    { id: 5, label: "Bills", icon: <ReceiptText /> },
    { id: 6, label: "Health", icon: <HeartPulse /> },
    { id: 7, label: "Entertainment", icon: <Clapperboard /> },
    { id: 8, label: "Other", icon: <Ellipsis /> },
];

export default categories;