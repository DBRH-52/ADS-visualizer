// Data Structures main page
// URL: /data-structures

import React from "react";
import Link from "next/link";

export default function DataStructures() {
    return (
        <div>
            <h1>Data Structures</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/data-structures/arrays" style={{ fontSize: '1.2em' }}>
                        Arrays and Lists
                    </Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/data-structures/trees" style={{ fontSize: '1.2em' }}>
                        Trees
                    </Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/data-structures/graphs" style={{ fontSize: '1.2em' }}>
                        Graphs
                    </Link>
                </li>
            </ul>
        </div>
    );
} 