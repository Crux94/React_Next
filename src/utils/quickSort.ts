export const quickSort = (arr: number[] = []): number[] => {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const less = [];
    const greater = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}