"use client";

import './algorithms.css';

import { useState } from 'react';

export default function Algorithms() {

    const [selectedAlgorithmType, setSelectedAlgorithmType] = useState('');
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const algorithms = {
        sorting: ['bubble-sort', 'quick-sort'],
        searching: ['binary-search', 'linear-search']
    };

    const handleAlgorithmTypeChange = (e) => { // e - event object 
        setSelectedAlgorithmType(e.target.value);
        setSelectedAlgorithm('');
    };

    const handleAlgorithmChange = (e) => {
        setSelectedAlgorithm(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (
      <div className="algorithms-container">
        <h1 className="algorithms-title">Algorithms</h1>

        <div className="dropdowns-container">

            <select 
                className="dropdown"
                value={selectedAlgorithmType}
                onChange={handleAlgorithmTypeChange}
                >
                <option value="">algorithm type</option>
                <option value="sorting">sorting</option>
                <option value="searching">searching</option>
            </select>

            <select 
                className="dropdown"
                value={selectedAlgorithm}
                onChange={handleAlgorithmChange}
            >
                <option value="">algorithm</option>
                <option value="bubble-sort">bubble sort</option>
                <option value="quick-sort">quick sort</option>
            </select>
        
            <select 
                className="dropdown"
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                <option value="">language</option>
                <option value="python">python</option>
                <option value="javascript">javascript</option>
            </select>

        </div>

      </div>
    );
  }
  