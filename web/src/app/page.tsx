// Home page
// URL: /

import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Algorithms & Data Structures</h1>
            <p>Simple website where you can learn about different algorithms and data structures.</p>
            
            <div style={{ marginTop: '30px' }}>
                <h3>Algorithms</h3>
                <ul>
                    <li>Sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort</li>
                    <li>Searching algorithms like Binary Search and Linear Search</li>
                    <li>Graph algorithms like Dijkstra's and Kruskal's</li>
                </ul>

                <h3>Data Structures</h3>
                <ul>
                    <li>Arrays and Lists - the building blocks of data organization</li>
                    <li>Trees - hierarchical structures for efficient data management</li>
                    <li>Graphs - perfect for representing networks and relationships</li>
                </ul>
            </div>
        </div>
    );
}

