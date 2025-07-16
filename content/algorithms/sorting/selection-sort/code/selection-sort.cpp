#include <iostream>

void selectionSort(int arr[]) 
{
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]) - 1; i++) 
    {
        int min_idx = i;
        for (int j = i + 1; j < sizeof(arr) / sizeof(arr[0]); j++) 
        {
            if (arr[j] < arr[min_idx]) 
            {
                min_idx = j;
            }
        }
        std::swap(arr[min_idx], arr[i]);
    }
}

int main() 
{
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    
    std::cout << "Unsorted array: ";
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    
    selectionSort(arr);
    
    std::cout << "Sorted array: ";
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    
    return 0;
} 