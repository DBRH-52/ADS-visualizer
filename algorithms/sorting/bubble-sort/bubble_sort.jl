arr = [8,2,4,3]

function bubble_sort!(arr::Vector{Int})
    for i in 1:length(arr)
        for j in 1:length(arr) - i
            if arr[j] > arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
            end
        end
    end
end

bubble_sort!(arr)
