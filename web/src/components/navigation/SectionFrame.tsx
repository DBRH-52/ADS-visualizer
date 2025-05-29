'use client';

import React from 'react';
import Link from 'next/link';
import sectionStyles from '@/styles/components/SectionFrame.module.css';

interface SectionFrameProps {
  title: string;
  path: string;
}

const SectionFrame = ({ title, path }: SectionFrameProps) => {
  return (
    <Link 
      href={path}
      className={sectionStyles.link}
    >
      <div className={sectionStyles.card}>
        <h2 className={sectionStyles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default SectionFrame; 