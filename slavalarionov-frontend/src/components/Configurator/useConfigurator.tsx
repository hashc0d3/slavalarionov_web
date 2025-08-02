import {useState} from "react";

const useConfigurator = () => {

    // Состояние для текущего шага
    const [currentStep, setCurrentStep] = useState(0);

    // Состояние для открытия модального окна оплаты
    const [showFinishDialog, setShowFinishDialog] = useState(false);

    // Стейты для первого шага
    const [selectedProduct, setSelectedProduct] = useState<number | undefined>();
    const [selectedColor, setSelectedColor] = useState<string | undefined>();
    const [selectedSize, setSelectedSize] = useState<string | undefined>();

    const handleContinueClick = (
        step: number,
        stepsCurrency: number,
    ) => {
        // Проверяем только на первом шаге
        if (step === 0) {
            if (
                selectedProduct === undefined ||
                selectedColor === undefined ||
                selectedSize === undefined
            ) {
                return ;
            }
        }
        if (step < stepsCurrency - 1) {
            setCurrentStep(step + 1);
        } else {
            setShowFinishDialog(true);
        }
    };

    return {
        step: {currentStep, setCurrentStep},
        dialog: {showFinishDialog, setShowFinishDialog},
        handleContinueClick,
        // Стейты для первого шага
        selectedProductState: {selectedProduct, setSelectedProduct},
        selectedColorState: {selectedColor, setSelectedColor},
        selectedSizeState: {selectedSize, setSelectedSize},
        //
    }
};

export default useConfigurator;