import { useQuery } from "@tanstack/react-query";
import type { WatchModelDetailedDto } from "../../../../types/WatchModelsDto.ts";
import { getWatchModels } from "../../../../api/getWatchModels.ts";
import { useEffect } from "react";
import type { FirstStepType } from "@components/Configurator/Steps/FirstStep/types/FirstStepType.tsx";

const useFirstStep = ({
  selectedProductState,
  selectedColorState,
  selectedSizeState
}: FirstStepType) => {

    const { data: products, isLoading } = useQuery<WatchModelDetailedDto[]>({
        queryKey: ['watch-models'],
        queryFn: getWatchModels,
    });

    useEffect(() => {
        selectedColorState?.setSelectedColor?.(undefined);
        selectedSizeState?.setSelectedSize?.(undefined);
    }, [selectedProductState?.selectedProduct]);

    return {
        products,
        isLoading
    };
};

export default useFirstStep;