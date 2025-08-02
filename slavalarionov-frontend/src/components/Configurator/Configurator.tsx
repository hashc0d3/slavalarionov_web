import { Steps } from 'primereact/steps';
import { Dialog } from 'primereact/dialog';
import {Button} from "primereact/button";
// Импортируйте компоненты шагов
import FirstStep from '@components/Configurator/Steps/FirstStep/FirstStep.tsx';
import SecondStep from '@components/Configurator/Steps/SecondStep/SecondStep.tsx';
import ThirdStep from '@components/Configurator/Steps/ThirdStep/ThirdStep.tsx';
import FourthStep from '@components/Configurator/Steps/FourthStep/FourthStep.tsx';
import useConfigurator from "@components/Configurator/useConfigurator.tsx";
import style from './Configurator.module.scss';

const steps = [
    { label: 'Шаг 1', description: 'Описание шага 1', content: <FirstStep /> },
    { label: 'Шаг 2', description: 'Описание шага 2', content: <SecondStep /> },
    { label: 'Шаг 3', description: 'Описание шага 3', content: <ThirdStep /> },
    { label: 'Шаг 4', description: 'Описание шага 4', content: <FourthStep /> },
];

const Configurator = () => {

    const {
        step,
        dialog,
        handleContinueClick
    } = useConfigurator();

    return (
        <div className={style.constructorBody}>
            <Steps
                model={steps}
                activeIndex={step.currentStep}
                onSelect={e => step.setCurrentStep(e.index)}
                readOnly={false}
            />
            <Button
                label="Назад"
                onClick={() => step.setCurrentStep(step.currentStep - 1)}
                disabled={step.currentStep <= 0}
            />
            <Button
                label={step.currentStep < steps.length - 1 ? 'Далее' : 'Оплатить'}
                onClick={() => handleContinueClick(step.currentStep, steps.length)}
                severity="success"
            />
            <div className={style.container}>
                {steps[step.currentStep].content}
            </div>
            <Dialog
                header="Готово!"
                visible={dialog.showFinishDialog}
                onHide={() => dialog.setShowFinishDialog(false)}
                footer={
                    <Button label="Закрыть" onClick={() => dialog.setShowFinishDialog(false)} autoFocus />
                }
            >
                <p>Вы успешно завершили конструктор!</p>
            </Dialog>
        </div>
    );
};

export default Configurator;