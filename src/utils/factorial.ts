export const factorial = (num: number = 0): number => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}