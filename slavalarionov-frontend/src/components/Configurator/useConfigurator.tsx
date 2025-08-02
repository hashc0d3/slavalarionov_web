import {useState} from "react";

const useConfigurator = () => {

    // Состояние для текущего шага
    const [currentStep, setCurrentStep] = useState(0);

    // Состояние для отктия модального окна оплаты
    const [showFinishDialog, setShowFinishDialog] = useState(false);

    // Функция для обработки клика по кнопке "Далее" или "Оплатить"
    const handleContinueClick = (step: number, stepsCurrency: number) => {
        if (step < stepsCurrency - 1) {
            setCurrentStep(step + 1);
        } else {
            setShowFinishDialog(true);
        }
    }

    return {
        step: {currentStep, setCurrentStep},
        dialog: {showFinishDialog, setShowFinishDialog},
        handleContinueClick
    }
};

export default useConfigurator;