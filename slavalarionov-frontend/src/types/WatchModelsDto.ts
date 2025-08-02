export interface FrameColor {
    color_name: string;
    color_code: string;
    color_title: string;
}

export interface WatchModelDetailedDto {
    model_name: string;
    watch_model_name: string;
    watch_model_manufacturer: string;
    frame_colors: FrameColor[];
    watch_sizes: string[];
    main_image_url: string;
}