"use client";

import { useState } from "react";
import DropdownsView from "./DropdownsView";

type DropdownProps = {
    pageType: 'algorithms' | 'data-structures';
    onTypeChange: (value: string) => void;
    onItemChange: (value: string) => void;
    onLanguageChange: (value: string) => void;
    selectedType: string;
    selectedItem: string;
    selectedLanguage: string;
}

export default function Dropdowns({
    pageType,
    onTypeChange,
    onItemChange,
    onLanguageChange,
    selectedType,
    selectedItem,
    selectedLanguage
}: DropdownProps) {

    const algorithms = {
        sorting: 
        [
            'bubble-sort', 
            'selection-sort', 
            'insertion-sort', 
            'merge-sort', 
            'quick-sort', 
            'heap-sort', 
            'radix-sort', 
            'counting-sort', 
            'bucket-sort', 
            'shell-sort'
        ],
        searching: 
        [
            'linear-search', 
            'binary-search', 
            'jump-search', 
            'interpolation-search', 
            'exponential-search', 
            'ternary-search'
        ],
        graph: 
        [
            'depth-first-search', 
            'breadth-first-search', 
            'dijkstra-algorithm', 
            'kruskal-algorithm', 
            'prim-algorithm', 
            'bellman-ford-algorithm', 
            'floyd-warshall-algorithm', 
            'johnson-algorithm', 
            'topological-sort', 
            'kahn-algorithm'
        ],
        dynamic: 
        [
            'fibonacci-sequence', 
            'knapsack-problem', 
            'longest-common-subsequence', 
            'longest-increasing-subsequence', 
            'longest-common-substring', 
            'longest-palindromic-substring', 
            'longest-palindromic-subsequence', 
            'longest-palindromic-subarray', 
            'longest-palindromic-submatrix', 
            'longest-palindromic-subgraph', 
            'longest-palindromic-subtree'
        ],
        string: 
        [
            'reverse-string', 
            'palindrome-check', 
            'anagram-check', 
            'longest-common-prefix', 
            'longest-common-suffix', 
            'longest-common-substring', 
            'longest-common-subsequence'
        ],
        math: 
        [
            'fibonacci-sequence', 
            'prime-number-check', 
            'factorial', 
            'greatest-common-divisor', 
            'least-common-multiple', 
            'matrix-multiplication', 
            'matrix-addition', 
            'matrix-subtraction', 
            'matrix-transpose', 
            'matrix-inverse', 
            'matrix-determinant', 
            'matrix-rank', 
            'matrix-trace'
        ]
    };

    const dataStructures = {
        array: 
        [
            'array', 
            'linked-list', 
            'stack', 
            'queue', 
            'deque', 
            'priority-queue', 
            'heap', 
            'trie', 
            'graph'
        ],
        hash: 
        [
            'hash-table', 
            'hash-map', 
            'hash-set'
        ],
        tree: 
        [
            'binary-tree', 
            'binary-search-tree', 
            'avl-tree', 
            'red-black-tree', 
            'splay-tree', 
            'treap', 
            'b-tree', 
            'b-plus-tree', 
            'b-star-tree'
        ]
    };

    const languages = ['python', 'javascript', 'cpp', 'java'];

    const getTypeOptions = () => {
        if (pageType === 'algorithms') {
            return [
                {value: 'sorting', label: 'sorting'},
                {value: 'searching', label: 'searching'},
                {value: 'graph', label: 'graph'},
                {value: 'dynamic', label: 'dynamic'},
                {value: 'string', label: 'string'},
                {value: 'math', label: 'math'}
            ];
        } 
        else if (pageType === 'data-structures') {
            return [
                {value: 'array', label: 'array'},
                {value: 'hash', label: 'hash'},
                {value: 'tree', label: 'tree'}
            ];
        }
        return [];
    };

    const getItemOptions = () => {
        if (!selectedType) return [];
        
        if (pageType === 'algorithms') {
            return algorithms[selectedType as keyof typeof algorithms] || [];
        } 
        else if (pageType === 'data-structures') {
            return dataStructures[selectedType as keyof typeof dataStructures] || [];
        }
        return [];
    };

    return (
        <DropdownsView
            pageType={pageType}
            onTypeChange={onTypeChange}
            onItemChange={onItemChange}
            onLanguageChange={onLanguageChange}
            selectedType={selectedType}
            selectedItem={selectedItem}
            selectedLanguage={selectedLanguage}
            getTypeOptions={getTypeOptions}
            getItemOptions={getItemOptions}
            languages={languages}
        />
    );
}