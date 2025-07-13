#include <iostream>

void bubbleSort(int arr[]) 
{
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0])-1; i++) 
    {
        for (int j = 0; j < sizeof(arr)/sizeof(arr[0])-i-1; j++) 
        {
            if (arr[j] > arr[j+1]) 
            {
                std::swap(arr[j], arr[j+1]);
            }
        }
    }
}

int main() 
{
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    std::cout << "Unsorted array: ";
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    bubbleSort(arr);
    
    std::cout << "Sorted array: ";
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) 
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
