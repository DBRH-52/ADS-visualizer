'use client';

import React from 'react';
import frameStyles from '@/styles/components/frames/Frame.module.css';

interface ExplanationFrameProps {
  children?: React.ReactNode;
}

const ExplanationFrame = ({ children }: ExplanationFrameProps) => {
  return (
    <div className={frameStyles.frame}>
      <h3 className={frameStyles.title}>Explanation</h3>
      <div className={frameStyles.content}>
        {children || 'Explanation content will be displayed here'}
      </div>
    </div>
  );
};

export default ExplanationFrame; 