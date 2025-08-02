import type { WatchModelDetailedDto } from "../types/WatchModelsDto.ts";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getWatchModels(): Promise<WatchModelDetailedDto[]> {

    const response = await fetch(`${BACKEND_URL}/watch-models`);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке моделей часов');
    }
    return response.json();
}