import type {Dispatch, SetStateAction} from "react";

export interface FirstStepType {
    selectedProductState: {
        selectedProduct: number | undefined
        setSelectedProduct: Dispatch<SetStateAction<number | undefined>>
    },
    selectedColorState: {
        selectedColor: string | undefined
        setSelectedColor: Dispatch<SetStateAction<string | undefined>>
    },
    selectedSizeState: {
        selectedSize: string | undefined
        setSelectedSize: Dispatch<SetStateAction<string | undefined>>
    }
}