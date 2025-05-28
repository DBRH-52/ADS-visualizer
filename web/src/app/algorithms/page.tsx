// Algorithms main page
// URL: /algorithms

import React from "react";
import Link from "next/link";

export default function Algorithms() {
    return (
        <div>
            <h1>Algorithms</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/algorithms/sorting" style={{ fontSize: '1.2em' }}>
                        Sorting Algorithms
                    </Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/algorithms/searching" style={{ fontSize: '1.2em' }}>
                        Searching Algorithms
                    </Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link href="/algorithms/graph" style={{ fontSize: '1.2em' }}>
                        Graph Algorithms
                    </Link>
                </li>
            </ul>
        </div>
    );
} 