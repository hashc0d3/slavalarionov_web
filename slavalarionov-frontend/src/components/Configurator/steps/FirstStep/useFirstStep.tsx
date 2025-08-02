import {useQuery} from "@tanstack/react-query";
import type {WatchModelDetailedDto} from "../../../../types/WatchModelsDto.ts";
import {getWatchModels} from "../../../../api/getWatchModels.ts";
import {useState} from "react";

const useFirstStep = () => {

    const { data: products, isLoading } = useQuery<WatchModelDetailedDto[]>({
        queryKey: ['watch-models'],
        queryFn: getWatchModels,
    });

    const [selectedProduct, setSelectedProduct] = useState<number>(0);

    return {
        products,
        isLoading,
        selectedProductState: {selectedProduct, setSelectedProduct},
    }
};

export default useFirstStep;