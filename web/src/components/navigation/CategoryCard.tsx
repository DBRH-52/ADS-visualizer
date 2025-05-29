import React from 'react';
import Link from 'next/link';
import categoryStyles from '@/styles/components/CategoryCard.module.css';

interface CategoryCardProps {
  title: string;
  path: string;
}

const CategoryCard = ({ title, path }: CategoryCardProps) => {
  return (
    <Link 
      href={path}
      className={categoryStyles.link}
    >
      <div className={categoryStyles.card}>
        <h2 className={categoryStyles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard; 