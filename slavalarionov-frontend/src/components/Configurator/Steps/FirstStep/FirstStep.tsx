import type {FC} from 'react';
import { Card } from 'primereact/card';
import Skeleton from "@components/common/Skeleton.tsx";
import useFirstStep from "@components/Configurator/Steps/FirstStep/useFirstStep.tsx";
import { Button } from "primereact/button";
import ColorButton from '@components/common/ColorButton/ColorButton';
import styles from './FirstStep.module.scss';
import type { FirstStepType } from "@components/Configurator/Steps/FirstStep/types/FirstStepType.tsx";

const FirstStep: FC<FirstStepType> = ({
  selectedProductState,
  selectedColorState,
  selectedSizeState
}) => {

    // Проверяем, что переданы необходимые состояния
    // Используем хук для получения данных и состояния загрузки
    const { products, isLoading } = useFirstStep({ selectedProductState, selectedColorState, selectedSizeState });

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
                        footer={product.watch_sizes.map(size =>
                            <Button
                                key={size}
                                label={size + "mm"}
                                severity="secondary"
                                onClick={() => selectedSizeState.setSelectedSize(size)}
                                className={selectedSizeState.selectedSize === size ? styles.selectedColor : ''}
                            />
                        )}
                    />
                ))}
            </div>
            <div className={styles.colorsList}>
                {selectedProductState.selectedProduct &&
                    products[selectedProductState.selectedProduct]?.frame_colors.map((color) => (
                        <ColorButton
                            key={color.color_code}
                            colorHex={color.color_code}
                            label={color.color_title}
                            onClick={() => selectedColorState.setSelectedColor(color.color_code)}
                            selected={color.color_code === selectedColorState.selectedColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default FirstStep;