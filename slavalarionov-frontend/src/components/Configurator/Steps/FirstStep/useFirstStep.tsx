import {useQuery} from "@tanstack/react-query";
import type {WatchModelDetailedDto} from "../../../../types/WatchModelsDto.ts";
import {getWatchModels} from "../../../../api/getWatchModels.ts";
import {useEffect, useState} from "react";

const useFirstStep = () => {

    const { data: products, isLoading } = useQuery<WatchModelDetailedDto[]>({
        queryKey: ['watch-models'],
        queryFn: getWatchModels,
    });

    const [selectedProduct, setSelectedProduct] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<string | undefined>();
    const [selectedSize, setSelectedSize] = useState<string | undefined>();


    useEffect(() => {
        setSelectedColor(undefined);
        setSelectedSize(undefined);
    }, [selectedProduct]);

    return {
        products,
        isLoading,
        selectedProductState: {selectedProduct, setSelectedProduct},
        selectedColorState: {selectedColor, setSelectedColor},
        selectedSizeState: {selectedSize, setSelectedSize},
    }
};

export default useFirstStep;