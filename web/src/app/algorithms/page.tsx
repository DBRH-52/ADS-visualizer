// Algorithms main page
// URL: /algorithms

import React from 'react';
import CategoryCard from '@/components/navigation/CategoryCard';
import styles from '@/styles/pages/category.module.css';

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
    <main className={styles.container}>
      <h1 className={styles.title}>Algorithms</h1>
      <div className={styles.grid}>
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