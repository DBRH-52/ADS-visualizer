import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/CategoryCard.module.css';

interface CategoryCardProps {
  title: string;
  path: string;
}

const CategoryCard = ({ title, path }: CategoryCardProps) => {
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

export default CategoryCard; 