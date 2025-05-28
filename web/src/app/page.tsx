// Home page
// URL: /

import React from 'react';
import SectionFrame from '@/components/navigation/SectionFrame';

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
    <main style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>
        Algorithms and Data Structures
      </h1>

      <div style={{ 
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
      }}>
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

