import React from 'react';
import { Card } from 'primereact/card';
import Skeleton from "@components/common/Skeleton.tsx";
import useFirstStep from "@components/Configurator/steps/FirstStep/useFirstStep.tsx";
import {Button} from "primereact/button";
import ColorButton from '@components/common/ColorButton/ColorButton';

const FirstStep: React.FC = () => {

    const {
        products,
        isLoading,
        selectedProductState
    } = useFirstStep();

    if (isLoading || !products) {
        return <Skeleton />;
    }

    return (
        <>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'nowrap' }}>
                {products.map((product, i) => (
                    <Card
                        key={i}
                        header={
                            <img
                                alt={product.model_name}
                                src={product.main_image_url}
                                style={{ width: '100%' }}
                            />
                        }
                        onClick={() => selectedProductState.setSelectedProduct(i)}
                        title={product.watch_model_manufacturer}
                        subTitle={product.model_name}
                        style={{ width: '250px' }}
                        footer={product.watch_sizes.map(
                            size => <Button label={size} severity="secondary"/>
                        )}
                    />
                ))}
            </div>
            <>
                {products[selectedProductState.selectedProduct].frame_colors.map((color) => (
                    <ColorButton
                        key={color.color_code}
                        colorHex={color.color_code}
                        label={color.color_title}
                        // onClick и selected добавьте при необходимости
                    />
                ))}
            </>
        </>
    );
};

export default FirstStep;