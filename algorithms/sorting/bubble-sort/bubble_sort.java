int[] arr = {8,2,4,3};

public class bubble_sort
{
    static void bubble_sort(int[] arr)
    {
        for (int i = 0; i < arr.length; i++)
        {
            for (int j = 0; j < arr.length - 1 - i; j++)
            {
                if (arr[j] > arr[j+1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
}

public static void main(String[] args)
{
    bubble_sort(arr);
}