#include <stdio.h>

void swap(int* a, int* b) 
{
    int t = *a;
    *a = *b;
    *b = t;
}

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
        swap(&arr[min_idx], &arr[i]);
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

    selectionSort(arr);

    printf("Sorted array: ");
    printArray(arr);

    return 0;
}
