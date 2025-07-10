"use client";

import './algorithms.css';
import Frame from '../../components/Frame';
import Dropdowns from '../../components/Dropdowns';

import { useState } from 'react';

export default function Algorithms() {

    const [selectedAlgorithmType, setSelectedAlgorithmType] = useState('');
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleAlgorithmTypeChange = (value: string) => {
        setSelectedAlgorithmType(value);
        setSelectedAlgorithm('');
    };

    const handleAlgorithmChange = (value: string) => {
        setSelectedAlgorithm(value);
    };

    const handleLanguageChange = (value: string) => {
        setSelectedLanguage(value);
    };

    return (
      <div className="algorithms-container">
        <h1 className="algorithms-title">Algorithms</h1>

        <Dropdowns
            pageType="algorithms"
            onTypeChange={handleAlgorithmTypeChange}
            onItemChange={handleAlgorithmChange}
            onLanguageChange={handleLanguageChange}
            selectedType={selectedAlgorithmType}
            selectedItem={selectedAlgorithm}
            selectedLanguage={selectedLanguage}
        />

        <Frame
            selectedType={selectedAlgorithmType}
            selectedItem={selectedAlgorithm}
            selectedLanguage={selectedLanguage}
        />

      </div>
    );
  }
  