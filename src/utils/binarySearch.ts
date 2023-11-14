export const binarySearch = (searchElem: number = 0, sortedArray: number[] = []): number => {
   let min = 0;
   let max = sortedArray.length - 1;
   let mid, guess;

   while (min < max) {
       mid = Math.ceil((min + max) / 2);
       guess = sortedArray[mid];
        if (guess === searchElem ) 
            return mid;
        if (guess < searchElem) {
            min = mid;
        } else {
            max = mid - 1;
        }
   }

   return -1;
}