"use client";

import type { ChangeEvent } from "react";
import { cn } from "cn";
import { formatWithThousandsSeparator } from "@/lib/utils/formatWithThousandsSeparator";

type AmountInputProps = {
    id?: string;
    value?: string | number;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    onBlur?: () => void;
    className?: string;
};

const amountInputClassName =
    "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function AmountInput({
                                id,
                                value = "",
                                onChange,
                                placeholder,
                                disabled,
                                name,
                                onBlur,
                                className,
                            }: AmountInputProps) {
    const displayValue = formatWithThousandsSeparator(value);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const rawValue = event.target.value.replace(/\D/g, "");
        onChange(rawValue);
    }

    return (
        <input
            id={id}
            type="text"
            inputMode="numeric"
            name={name}
            value={displayValue}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(amountInputClassName, className)}
        />
    );
}