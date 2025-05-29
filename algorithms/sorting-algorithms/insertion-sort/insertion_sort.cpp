#include <iostream>
#include <vector>

std::vector<int> arr = {8,2,4,3};

void insertion_sort(std::vector<int>& arr) 
{
    for (int i = 1; i < arr.size(); ++i) 
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) 
        {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = key;
    }
} 