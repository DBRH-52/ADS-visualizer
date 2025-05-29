#include <stdio.h>

int arr[] = {8,2,4,3};

void insertion_sort(int arr[]) 
{
    for (int i = 1; i < sizeof(arr)/sizeof(arr[0]); i++) 
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) 
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
} 