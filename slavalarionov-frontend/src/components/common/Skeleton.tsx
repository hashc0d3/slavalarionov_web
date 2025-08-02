import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const Skeleton: React.FC = () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        width: '100%',
        gap: 16,
    }}>
        <ProgressSpinner style={{ width: 50, height: 50 }} />
        <span style={{ fontSize: 18, color: '#888' }}>Loading...</span>
    </div>
);

export default Skeleton;