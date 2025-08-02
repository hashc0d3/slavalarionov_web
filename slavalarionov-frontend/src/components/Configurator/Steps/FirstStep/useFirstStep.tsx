import { useQuery } from "@tanstack/react-query";
import type { WatchModelDetailedDto } from "../../../../types/WatchModelsDto.ts";
import { getWatchModels } from "../../../../api/getWatchModels.ts";
import type { FirstStepType } from "@components/Configurator/Steps/FirstStep/types/FirstStepType.tsx";

const useFirstStep = ({
  selectedProductState,
  selectedColorState,
  selectedSizeState
}: FirstStepType) => {

    console.log(selectedProductState.selectedProduct, selectedColorState.selectedColor, selectedSizeState.selectedSize)

    const { data: products, isLoading } = useQuery<WatchModelDetailedDto[]>({
        queryKey: ['watch-models'],
        queryFn: getWatchModels,
    });

    return {
        products,
        isLoading
    };
};

export default useFirstStep;