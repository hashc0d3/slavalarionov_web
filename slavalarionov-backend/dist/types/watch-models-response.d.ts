export interface FrameColor {
    id: number;
    color_name: string;
    color_code: string;
    color_title: string;
}
export interface WatchSize {
    id: number;
    watch_size: string;
}
export interface MainImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
export interface MainImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: MainImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
export interface WatchModel {
    id: number;
    model_name: string;
    watch_model_name: string;
    watch_model_manufacturer: string;
    frame_colors: FrameColor[];
    watch_sizes: WatchSize[];
    main_image: MainImage;
}
export interface WatchModelData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    watch_model: WatchModel;
}
export interface WatchModelsResponse {
    data: WatchModelData[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
