package main

import "fmt"

var arr = []int{8,2,4,3}

func bubbleSort(arr []int) 
{
	for i := 0; i < len(arr)-1; i++ 
	{
		swapped := false
		for j := 0; j < len(arr)-1-i; j++ 
		{
			if arr[j] > arr[j+1] 
			{
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = true
			}
		}
		if !swapped 
		{
			break
		}
	}
}

func main()
{
	bubbleSort(arr)
}
