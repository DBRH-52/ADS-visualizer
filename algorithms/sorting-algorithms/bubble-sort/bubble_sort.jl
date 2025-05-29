arr = [8,2,4,3]

function bubble_sort!(arr::Vector)
    for i in 1:length(arr)-1
        swapped = false
        for j in 1:length(arr)-i
            if arr[j] > arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            end
        end
        !swapped && break
    end
    return arr
end

bubble_sort!(arr)
