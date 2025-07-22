#include <stdio.h>

void bubbleSort(int arr[]) 
{
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]) - 1; i++) 
    {
        for (int j = 0; j < sizeof(arr) / sizeof(arr[0]) - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void printArray(int arr[]) 
{
    for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) 
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() 
{
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    printf("Unsorted array: ");
    printArray(arr);

    bubbleSort(arr);

    printf("Sorted array: ");
    printArray(arr);
    
    return 0;
}
