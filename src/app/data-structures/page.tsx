"use client";

import './data-structures.css';
import Frame from '../../components/Frame';

import { useState } from 'react';

export default function DataStructures() {

  const [selectedDataStructureType, setSelectedDataStructureType] = useState('');
  const [selectedDataStructure, setSelectedDataStructure] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const dataStructures = {
    array: ['array', 'linked-list', 'stack', 'queue', 'tree', 'graph'],
    hash: ['hash-table', 'hash-set'],
    tree: ['binary-tree', 'binary-search-tree', 'avl-tree', 'red-black-tree'],
  };

  const handleDataStructureTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataStructureType(e.target.value);
    setSelectedDataStructure('');
  };

  const handleDataStructureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDataStructure(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

    return (
      <div className="data-structures-container">
        <h1 className="data-structures-title">Data Structures</h1>

        <div className="dropdowns-container">

          <select
            className="dropdown"
            value={selectedDataStructureType}
            onChange={handleDataStructureTypeChange}
          >
            <option value="">data structure type</option>
            <option value="array">array</option>
            <option value="hash">hash</option>
            <option value="tree">tree</option>
          </select>

          <select
            className="dropdown"
            value={selectedDataStructure}
            onChange={handleDataStructureChange}
          >
            <option value="">data structure</option>
            {selectedDataStructureType && dataStructures[selectedDataStructureType]?.map(dataStructure => (
              <option key={dataStructure} value={dataStructure}>
                {dataStructure.replace('-', ' ')}
              </option>
            ))}
          </select>

          <select
            className="dropdown"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="">language</option>
          </select>

        </div>

        <Frame
            selectedType={selectedDataStructureType}
            selectedItem={selectedDataStructure}
            selectedLanguage={selectedLanguage}
        />

      </div>
    );
  }
  