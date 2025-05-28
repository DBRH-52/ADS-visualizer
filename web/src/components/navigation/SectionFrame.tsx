'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/SectionFrame.module.css';

interface SectionFrameProps {
  title: string;
  path: string;
}

const SectionFrame = ({ title, path }: SectionFrameProps) => {
  return (
    <Link 
      href={path}
      className={styles.link}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default SectionFrame; 