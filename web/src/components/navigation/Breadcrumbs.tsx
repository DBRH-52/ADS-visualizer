/**
 * Breadcrumbs component needs to be a Client Component !!!
 * -> because it uses usePathname hook
 * 'use client' dir tells Next.js to render this component on the client side
**/
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * show current navigation path
 * example: Home / algorithms / sorting
 **/

const Breadcrumbs = () => {
  // Get current URL path
  const pathname = usePathname();

  // Split path into segments and 
  // Remove empty strings
  const paths = pathname?.split('/').filter(Boolean) || [];
  
  // DO NOT show breadcrumbs on home page
  if (paths.length === 0) return null;

  return (
    <div style={{ padding: '8px 0' }}>
      {/* Show Home as first element - it's always clickable and redirects to root (/) */}
      <Link href="/">Home</Link>

      {/* Map through path segments to create breadcrumb chain */}
      {paths.map((path, index) => (
        <span key={index}>
          {' / '} {/* Separator between items */}
          <Link href={'/' + paths.slice(0, index + 1).join('/')}>
            {path}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs; 