let mut arr = [8,2,4,3];

pub fn bubble_sort<T: Ord>(arr: &mut [T]) 
{
    for i in 0..arr.len() - 1 
    {
        let mut swapped = false;
        for j in 0..arr.len() - 1 - i 
        {
            if arr[j] > arr[j + 1] 
            {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped 
        {
            break;
        }
    }
}

fn main()
{
    bubble_sort(&mut arr);
}