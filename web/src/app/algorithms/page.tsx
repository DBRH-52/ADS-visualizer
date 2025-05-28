// Algorithms main page
// URL: /algorithms

import React from 'react';
import CategoryCard from '@/components/navigation/CategoryCard';

export default function AlgorithmsPage() {
  const categories = [
    {
      title: 'Sorting Algorithms',
      path: '/algorithms/sorting'
    },
    {
      title: 'Searching Algorithms',
      path: '/algorithms/searching'
    },
    {
      title: 'Graph Algorithms',
      path: '/algorithms/graph'
    }
  ];

  return (
    <main style={{ padding: '20px' }}>
      <h1>Algorithms</h1>
      <div style={{ 
        display: 'grid', 
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}>
        {categories.map((category) => (
          <CategoryCard 
            key={category.path}
            title={category.title}
            path={category.path}
          />
        ))}
      </div>
    </main>
  );
} 