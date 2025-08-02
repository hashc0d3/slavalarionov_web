import type {Dispatch, SetStateAction} from "react";

export interface FirstStepType {
    selectedProductState: {
        selectedProduct: number
        setSelectedProduct: Dispatch<SetStateAction<number>>
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