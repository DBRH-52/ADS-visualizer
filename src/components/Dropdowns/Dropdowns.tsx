"use client";

import { useState } from "react";
import DropdownsView from "./DropdownsView";
import { 
    algorithms, 
    dataStructures, 
    languages, 
    algorithmTypeOptions, 
    dataStructureTypeOptions 
} from "../../data/options";

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

    const getTypeOptions = () => {
        if (pageType === 'algorithms') {
            return algorithmTypeOptions;
        } 
        else if (pageType === 'data-structures') {
            return dataStructureTypeOptions;
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