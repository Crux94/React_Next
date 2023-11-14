export const recursiveSumm = (arr: number[] = []): number => {
    if (!arr?.length) return -1;
    if (arr.length === 1) return arr[0];
    return arr.shift() + recursiveSumm(arr);
}