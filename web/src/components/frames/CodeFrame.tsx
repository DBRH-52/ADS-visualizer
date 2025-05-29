'use client';

import React from 'react';
import frameStyles from '@/styles/components/frames/Frame.module.css';

interface CodeFrameProps {
  children?: React.ReactNode;
}

const CodeFrame = ({ children }: CodeFrameProps) => {
  return (
    <div className={frameStyles.frame}>
      <h3 className={frameStyles.title}>Code</h3>
      <div className={frameStyles.content}>
        {children || 'Code content will be displayed here'}
      </div>
    </div>
  );
};

export default CodeFrame; 