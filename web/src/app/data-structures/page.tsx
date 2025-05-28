// Data Structures main page
// URL: /data-structures

import React from 'react';
import VisualizationFrame from '@/components/VisualizationFrame';
import CodeFrame from '@/components/CodeFrame';
import ExplanationFrame from '@/components/ExplanationFrame';

export default function DataStructuresPage() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Data Structures Visualization</h1>
      <div style={{ 
        display: 'flex', 
        width: '100%',
        gap: '16px',
        minHeight: 'calc(100vh - 200px)'
      }}>
        <VisualizationFrame />
        <CodeFrame />
        <ExplanationFrame />
      </div>
    </main>
  );
} 