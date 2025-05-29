// Sorting algorithms page
// URL: /algorithms/sorting

import React from 'react';
import VisualizationFrame from '@/components/frames/VisualizationFrame';
import CodeFrame from '@/components/frames/CodeFrame';
import ExplanationFrame from '@/components/frames/ExplanationFrame';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import algorithmStyles from '@/styles/pages/algorithm.module.css';

export default function SortingAlgorithmsPage() {
  return (
    <main className={algorithmStyles.container}>
      <Breadcrumbs />
      <h1 className={algorithmStyles.title}>Sorting Algorithms</h1>
      <div className={algorithmStyles.framesContainer}>
        <div className={algorithmStyles.visualizationFrame}>
          <VisualizationFrame />
        </div>
        
        <div className={algorithmStyles.codeFrame}>
          <CodeFrame />
        </div>
        
        <div className={algorithmStyles.explanationFrame}>
          <ExplanationFrame />
        </div>
      </div>
    </main>
  );
} 