arr = [8,2,4,3]

def bubble_sort(arr):
    for i in range(len(arr) - 1):
        swapped = False
        for j in range(len(arr) - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

bubble_sort(arr)
