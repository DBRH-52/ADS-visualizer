'use client';

import React from 'react';
import styles from '@/styles/components/frames/Frame.module.css';

interface ExplanationFrameProps {
  children?: React.ReactNode;
}

const ExplanationFrame: React.FC<ExplanationFrameProps> = ({ children }) => {
  return (
    <div className={styles.frame}>
      <h3 className={styles.title}>Explanation</h3>
      <div className={styles.content}>
        {children || 'Explanation content will be displayed here'}
      </div>
    </div>
  );
};

export default ExplanationFrame; 