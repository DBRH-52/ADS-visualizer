bubbleSort :: Ord a => [a] -> [a]
bubbleSort [] = []
bubbleSort xs = let (sorted, swapped) = bubble xs
                in if swapped then bubbleSort sorted else sorted
    where
        bubble [] = ([], False)
        bubble [x] = ([x], False)
        bubble (x:y:xs)
            | x > y = let (sorted, swapped) = bubble (x:xs)
                     in (y:sorted, True)
            | otherwise = let (sorted, swapped) = bubble (y:xs)
                         in (x:sorted, swapped)
