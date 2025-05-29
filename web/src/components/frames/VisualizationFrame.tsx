'use client';

import React from 'react';
import frameStyles from '@/styles/components/frames/Frame.module.css';

interface VisualizationFrameProps {
  children?: React.ReactNode;
}

const VisualizationFrame = ({ children }: VisualizationFrameProps) => {
  return (
    <div className={frameStyles.frame}>
      <h3 className={frameStyles.title}>Visualization</h3>
      <div className={frameStyles.content}>
        {children || 'Visualization content will be displayed here'}
      </div>
    </div>
  );
};

export default VisualizationFrame; 