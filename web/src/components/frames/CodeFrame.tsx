'use client';

import React from 'react';
import styles from '@/styles/components/frames/Frame.module.css';

interface CodeFrameProps {
  children?: React.ReactNode;
}

const CodeFrame: React.FC<CodeFrameProps> = ({ children }) => {
  return (
    <div className={styles.frame}>
      <h3 className={styles.title}>Code</h3>
      <div className={styles.content}>
        {children || 'Code content will be displayed here'}
      </div>
    </div>
  );
};

export default CodeFrame; 