#include <iostream>

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

    std::cout << "Unsorted array: ";
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    
    quickSort(arr, 0, sizeof(arr) / sizeof(arr[0]) - 1);
    
    std::cout << "Sorted array: ";
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
