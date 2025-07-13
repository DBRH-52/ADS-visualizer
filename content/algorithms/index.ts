
import bubbleSort_cpp from "./sorting/bubble-sort/code/bubble-sort.cpp?raw";
import bubbleSort_js from "./sorting/bubble-sort/code/bubble-sort.js?raw";
import bubbleSort_py from "./sorting/bubble-sort/code/bubble-sort.py?raw";

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
    'bubble-sort': {
        'cpp': bubbleSort_cpp,
        'js': bubbleSort_js,
        'py': bubbleSort_py
    }
};

export const getAlgorithmCode = (
    algorithm: string, language: string): string => {
        return algorithmsCode[algorithm]?.[language] || 'No code available.';
};
