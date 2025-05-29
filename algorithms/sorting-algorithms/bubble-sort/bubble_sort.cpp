#include <iostream>
#include <vector>

std::vector<int> arr = {8,2,4,3};

void bubble_sort(std::vector<int>& arr) 
{
    for (int i = 0; i < arr.size() - 1; ++i) 
    {
        bool swapped = false;
        for (int j = 0; j < arr.size() - 1 - i; ++j) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
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