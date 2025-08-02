import React from 'react';
import { Card } from 'primereact/card';
import Skeleton from "@components/common/Skeleton.tsx";
import useFirstStep from "@components/Configurator/Steps/FirstStep/useFirstStep.tsx";
import {Button} from "primereact/button";
import ColorButton from '@components/common/ColorButton/ColorButton';
import styles from './FirstStep.module.scss';

const FirstStep: React.FC = () => {

    const {
        products,
        isLoading,
        selectedProductState,
        selectedColorState,
        selectedSizeState
    } = useFirstStep();

    if (isLoading || !products) {
        return <Skeleton />;
    }

    return (
        <div className={styles.firstStep}>
            <div className={styles.cardList}>
                {products.map((product, i) => (
                    <Card
                        key={i}
                        className={`${styles.card} ${selectedProductState.selectedProduct === i ? styles.selected : ''}`}
                        header={
                            <img
                                alt={product.model_name}
                                src={product.main_image_url}
                            />
                        }
                        onClick={() => selectedProductState.setSelectedProduct(i)}
                        title={product.watch_model_manufacturer}
                        subTitle={product.model_name}
                        footer={product.watch_sizes.map(
                            size =>
                                <Button
                                    label={size + "mm"}
                                    severity="secondary"
                                    onClick={() => selectedSizeState.setSelectedSize(size)}
                                />
                        )}
                    />
                ))}
            </div>
            <div className={styles.colorsList}>
                {products[selectedProductState.selectedProduct].frame_colors.map((color) => (
                    <ColorButton
                        key={color.color_code}
                        colorHex={color.color_code}
                        label={color.color_title}
                        onClick={() => selectedColorState.setSelectedColor(color.color_code)}
                        selected={color.color_code === selectedColorState.selectedColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default FirstStep;