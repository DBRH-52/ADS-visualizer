"use client";

import './data-structures.css';
import Frame from '../../components/Frame';
import Dropdowns from '../../components/Dropdowns';

import { useState } from 'react';

export default function DataStructures() {

  const [selectedDataStructureType, setSelectedDataStructureType] = useState('');
  const [selectedDataStructure, setSelectedDataStructure] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleDataStructureTypeChange = (value: string) => {
    setSelectedDataStructureType(value);
    setSelectedDataStructure('');
  };

  const handleDataStructureChange = (value: string) => {
    setSelectedDataStructure(value);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

    return (
      <div className="data-structures-container">
        <h1 className="data-structures-title">Data Structures</h1>

        <Dropdowns
            pageType="data-structures"
            onTypeChange={handleDataStructureTypeChange}
            onItemChange={handleDataStructureChange}
            onLanguageChange={handleLanguageChange}
            selectedType={selectedDataStructureType}
            selectedItem={selectedDataStructure}
            selectedLanguage={selectedLanguage}
        />

        <Frame
            selectedType={selectedDataStructureType}
            selectedItem={selectedDataStructure}
            selectedLanguage={selectedLanguage}
        />

      </div>
    );
  }
  