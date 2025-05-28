import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav style={{ 
            padding: '10px',
            backgroundColor: '#222'
        }}>
            <ul style={{ 
                display: 'flex',
                gap: '20px',
                margin: 0,
                listStyle: 'none'
            }}>
                <li><Link href="/" style={{ color: 'white' }}>Home</Link></li>
                <li><Link href="/algorithms" style={{ color: 'white' }}>Algorithms</Link></li>
                <li><Link href="/data-structures" style={{ color: 'white' }}>Data Structures</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
