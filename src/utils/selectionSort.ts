import {findSmallest} from './index'

export const selectionSort = (arr: number[]): number[] => {
    const result = [];
    let copy = [...arr];

    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = findSmallest(copy);
        copy = [...arr.slice(0, smallestIndex), ...arr.slice(smallestIndex + 1)];
        result.push(smallestIndex);
    }

    return result;
}