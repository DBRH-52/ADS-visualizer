// Sorting algorithms page
// URL: /algorithms/sorting

import React from 'react';
import VisualizationFrame from '@/components/frames/VisualizationFrame';
import CodeFrame from '@/components/frames/CodeFrame';
import ExplanationFrame from '@/components/frames/ExplanationFrame';

export default function SortingAlgorithmsPage() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Sorting Algorithms</h1>
      <div style={{ 
        display: 'flex', 
        width: '100%',
        gap: '24px',
        minHeight: 'calc(100vh - 200px)',
        alignItems: 'stretch' // ensures all frames have the same height
      }}>
        {/* Visualization gets more space */}
        <div style={{ flex: '2' }}>
          <VisualizationFrame />
        </div>
        
        {/* Code and Explanation share remaining space */}
        <div style={{ flex: '1.5' }}>
          <CodeFrame />
        </div>
        
        <div style={{ flex: '1' }}>
          <ExplanationFrame />
        </div>
      </div>
    </main>
  );
} 