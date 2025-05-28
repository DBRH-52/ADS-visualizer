// Home page
// URL: /

import React from 'react';
import SectionFrame from '@/components/navigation/SectionFrame';
import styles from '@/styles/pages/home.module.css';

export default function Home() {
  const sections = [
    {
      title: 'Algorithms',
      path: '/algorithms'
    },
    {
      title: 'Data Structures',
      path: '/data-structures'
    }
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Algorithms and Data Structures
      </h1>

      <div className={styles.grid}>
        {sections.map((section) => (
          <SectionFrame 
            key={section.path}
            {...section}
          />
        ))}
      </div>
    </main>
  );
}

