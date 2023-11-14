export const findBiggest = (arr: number[] = [], biggestIndex: number = 0, fromIndex: number = 1): number => {
    if (!arr.length) return -1;
    if (arr.length === 1) return 0;
    if(fromIndex >= arr.length) return biggestIndex;

    return findBiggest(arr, arr[fromIndex] > arr[biggestIndex] ? fromIndex : biggestIndex, fromIndex + 1);
}