// src/utils/number.ts

export function formatWithThousandsSeparator(
    value: string | number
): string {
    const digits = String(value).replace(/\D/g, "");

    if (!digits) return "";

    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}