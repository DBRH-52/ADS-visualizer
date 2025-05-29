val arr = intArrayOf(8, 2, 4 ,3)

fun <T : Comparable<T>> bubbleSort(arr: MutableList<T>) 
{
    for (i in 0 until arr.size - 1) 
    {
        var swapped = false
        for (j in 0 until arr.size - 1 - i) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                arr[j] = arr[j + 1].also { arr[j + 1] = arr[j] }
                swapped = true
            }
        }
        if (!swapped) break
    }
}