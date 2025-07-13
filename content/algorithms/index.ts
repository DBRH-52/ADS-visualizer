import { bubbleSortCode } from './sorting/bubble-sort/code/bubble-sort-code';

//------------------ SORTING ALGORITHMS ------------------//
// BUBBLE SORT //
// QUICK SORT //
// INSERTION SORT //
// SELECTION SORT //
// MERGE SORT //
// HEAP SORT //
// RADIX SORT //
// BUCKET SORT //
// COUNTING SORT //

export const algorithmsCode: Record<string, Record<string, string>> = {
    'bubble-sort': bubbleSortCode
};

export const getAlgorithmCode = (
    algorithm: string, language: string): string => {
        return algorithmsCode[algorithm]?.[language] || 'No code available.';
};
