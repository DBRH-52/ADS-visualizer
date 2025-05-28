// Trees page
// URL: /data-structures/trees

import React from "react";
import VisualizationFrame from '@/components/frames/VisualizationFrame';
import CodeFrame from '@/components/frames/CodeFrame';
import ExplanationFrame from '@/components/frames/ExplanationFrame';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

export default function TreesPage() {
    return (
        <main style={{ padding: '20px' }}>
            <Breadcrumbs />
            <h1>Trees</h1>
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