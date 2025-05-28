'use client';

import React from 'react';
import styles from '@/styles/components/frames/Frame.module.css';

interface VisualizationFrameProps {
  children?: React.ReactNode;
}

const VisualizationFrame: React.FC<VisualizationFrameProps> = ({ children }) => {
  return (
    <div className={styles.frame}>
      <h3 className={styles.title}>Visualization</h3>
      <div className={styles.content}>
        {children || 'Visualization content will be displayed here'}
      </div>
    </div>
  );
};

export default VisualizationFrame; 