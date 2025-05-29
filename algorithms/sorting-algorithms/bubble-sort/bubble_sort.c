#include <stdio.h>

int arr[] = {8,2,4,3};

void bubble_sort(int arr[])
{
    for (int i = 0; i < sizeof(arr)/sizeof(arr[0]) - 1; i++)
    {
        int swapped = 0;
        for (int j = 0; j < sizeof(arr)/sizeof(arr[0]) - 1 - i; j++)
        {
            if (arr[j] > arr[j+1])
            {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}

int main()
{
    bubble_sort(arr);

    return 0;
}