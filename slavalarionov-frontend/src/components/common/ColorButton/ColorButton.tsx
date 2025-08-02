import React, { type FC } from 'react';
import styles from './ColorButton.module.scss';

interface ColorButtonProps {
    colorHex: string;
    label: string;
    onClick?: () => void;
    selected?: boolean;
}

const ColorButton: FC<ColorButtonProps> = ({ colorHex, label, onClick, selected }) => (
    <div
        onClick={onClick}
        className={`${styles.colorWrapper} ${selected ? styles.selected : ''}`}
    >
        <span
            className={styles.color}
            style={{ '--color-hex': colorHex } as React.CSSProperties}
        />
        <span style={{ fontSize: 18 }}>{label}</span>
    </div>
);

export default ColorButton;