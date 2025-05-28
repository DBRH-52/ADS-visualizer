// Sorting algorithms page
// URL: /algorithms/sorting

import React from 'react';
import VisualizationFrame from '@/components/frames/VisualizationFrame';
import CodeFrame from '@/components/frames/CodeFrame';
import ExplanationFrame from '@/components/frames/ExplanationFrame';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import styles from '@/styles/pages/algorithm.module.css';

export default function SortingAlgorithmsPage() {
  return (
    <main className={styles.container}>
      <Breadcrumbs />
      <h1 className={styles.title}>Sorting Algorithms</h1>
      <div className={styles.framesContainer}>
        <div className={styles.visualizationFrame}>
          <VisualizationFrame />
        </div>
        
        <div className={styles.codeFrame}>
          <CodeFrame />
        </div>
        
        <div className={styles.explanationFrame}>
          <ExplanationFrame />
        </div>
      </div>
    </main>
  );
} 