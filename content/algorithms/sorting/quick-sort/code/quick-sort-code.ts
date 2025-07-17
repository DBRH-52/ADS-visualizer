export const quickSortPython = 
    `def quick_sort(arr):
        if len(arr) <= 1:
            return arr
        
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        
        return quick_sort(left) + middle + quick_sort(right)

    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Unsorted array:", arr)
    sorted_arr = quick_sort(arr)
    print("Sorted array:", sorted_arr)`;

export const quickSortCpp = 
    `#include <iostream>
    int partition(int arr[], int low, int high) 
    {
        int pivot = arr[high];
        int i = (low - 1);
        
        for (int j = low; j <= high - 1; j++) 
        {
            if (arr[j] < pivot) 
            {
                i++;
                std::swap(arr[i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[high]);
        return (i + 1);
    }

    void quickSort(int arr[], int low, int high) 
    {
        if (low < high) 
        {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    int main() 
    {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = sizeof(arr) / sizeof(arr[0]);
        
        std::cout << "Unsorted array: ";
        for (int i = 0; i < n; i++) 
        {
            std::cout << arr[i] << " ";
        }
        std::cout << std::endl;
        
        quickSort(arr, 0, n - 1);
        
        std::cout << "Sorted array: ";
        for (int i = 0; i < n; i++) 
        {
            std::cout << arr[i] << " ";
        }
        std::cout << std::endl;
        
        return 0;
    }`;

export const quickSortJavaScript = 
    `function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        
        return [...quickSort(left), ...middle, ...quickSort(right)];
    }

    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log("Unsorted array:", arr);
    const sortedArr = quickSort(arr);
    console.log("Sorted array:", sortedArr);`;

export const quickSortJava = 
    `public class QuickSort {
        
        public static int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
            
            for (int j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            
            int temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            
            return i + 1;
        }
        
        public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        
        public static void main(String[] args) {
            int[] arr = {64, 34, 25, 12, 22, 11, 90};
            
            System.out.print("Unsorted array: ");
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
            
            quickSort(arr, 0, arr.length - 1);
            
            System.out.print("Sorted array: ");
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
        }
    }`;

export const getQuickSortCode = (language: string): string => {
    switch (language) {
        case 'python':
            return quickSortPython;
        case 'cpp':
            return quickSortCpp;
        case 'javascript':
            return quickSortJavaScript;
        case 'java':
            return quickSortJava;
        default:
            return quickSortPython;
    }
};
