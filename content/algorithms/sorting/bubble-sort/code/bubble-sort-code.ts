export const bubbleSortCode = {

  cpp: 
  `// Bubble Sort in C++
    #include <iostream>

    void bubbleSort(int arr[], int n) 
    {
        for (int i = 0; i < n-1; i++) 
        {
            for (int j = 0; j < n-i-1; j++) 
            {
                if (arr[j] > arr[j+1]) 
                {
                    std::swap(arr[j], arr[j+1]);
                }
            }
        }
    }

    int main() {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(arr)/sizeof(arr[0]);
        std::cout << "Unsorted array: ";
        for (int i = 0; i < n; i++) std::cout << arr[i] << " ";
        std::cout << std::endl;
        bubbleSort(arr, n);
        std::cout << "Sorted array: ";
        for (int i = 0; i < n; i++) std::cout << arr[i] << " ";
        std::cout << std::endl;
        return 0;
}`,

  js: 
  `// Bubble Sort in JavaScript
    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Unsorted array:", arr);
    const sortedArr = bubbleSort(arr);
    console.log("Sorted array:", sortedArr);`,

  py: 
  `# Bubble Sort in Python
    def bubble_sort(arr):
        for i in range(len(arr)):
            for j in range(0, len(arr) - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
        return arr
    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Unsorted array:", arr)
    sorted_arr = bubble_sort(arr)
    print("Sorted array:", sorted_arr)`
};
