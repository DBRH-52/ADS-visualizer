function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    
    return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);

const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr); 