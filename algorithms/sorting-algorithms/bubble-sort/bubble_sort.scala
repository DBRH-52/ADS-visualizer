val arr = Array(8,2,4,3)

def bubbleSort[T <: Ordered[T]](arr: Array[T]): Array[T] = {
    for (i <- 0 until arr.length - 1) 
    {
        var swapped = false
        for (j <- 0 until arr.length - 1 - i) 
        {
            if (arr(j) > arr(j + 1)) 
            {
                val temp = arr(j)
                arr(j) = arr(j + 1)
                arr(j + 1) = temp
                swapped = true
            }
        }
        if (!swapped) return arr
    }
    arr
}


