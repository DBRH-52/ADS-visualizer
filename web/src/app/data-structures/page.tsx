// Data Structures main page
// URL: /data-structures

import React from 'react';
import CategoryCard from '@/components/navigation/CategoryCard';

export default function DataStructuresPage() {
  const categories = [
    {
      title: 'Arrays and Lists',
      path: '/data-structures/arrays'
    },
    {
      title: 'Trees',
      path: '/data-structures/trees'
    },
    {
      title: 'Graphs',
      path: '/data-structures/graphs'
    }
  ];

  return (
    <main style={{ padding: '20px' }}>
      <h1>Data Structures</h1>
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