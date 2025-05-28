// Searching algorithms page
// URL: /algorithms/searching

import React from "react";
import VisualizationFrame from '@/components/frames/VisualizationFrame';
import CodeFrame from '@/components/frames/CodeFrame';
import ExplanationFrame from '@/components/frames/ExplanationFrame';

export default function SearchingAlgorithmsPage() {
    return (
        <main style={{ padding: '20px' }}>
            <h1>Searching Algorithms</h1>
            <div style={{ 
                display: 'flex', 
                width: '100%',
                gap: '24px',
                minHeight: 'calc(100vh - 200px)',
                alignItems: 'stretch'
            }}>
                <div style={{ flex: '2' }}>
                    <VisualizationFrame />
                </div>
                
                <div style={{ flex: '1.5' }}>
                    <CodeFrame />
                </div>
                
                <div style={{ flex: '1' }}>
                    <ExplanationFrame />
                </div>
            </div>
        </main>
    );
} 