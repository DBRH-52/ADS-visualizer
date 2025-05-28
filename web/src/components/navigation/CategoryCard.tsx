import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  path: string;
}

const CategoryCard = ({ title, path }: CategoryCardProps) => {
  return (
    <Link 
      href={path}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        border: '1px solid #ddd',
        padding: '16px',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard; 