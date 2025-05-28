// Data Structures main page
// URL: /data-structures

import React from 'react';
import CategoryCard from '@/components/navigation/CategoryCard';
import styles from '@/styles/pages/category.module.css';

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
    <main className={styles.container}>
      <h1 className={styles.title}>Data Structures</h1>
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