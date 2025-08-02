import type { Schema, Struct } from '@strapi/strapi';

export interface FrameColorsFrameColors extends Struct.ComponentSchema {
  collectionName: 'components_frame_colors_frame_colors';
  info: {
    displayName: 'frame_colors';
  };
  attributes: {
    color_code: Schema.Attribute.String;
    color_name: Schema.Attribute.String;
    color_title: Schema.Attribute.String;
  };
}

export interface WatchModelWatchModel extends Struct.ComponentSchema {
  collectionName: 'components_watch_model_watch_models';
  info: {
    displayName: 'watch_model';
  };
  attributes: {
    frame_colors: Schema.Attribute.Component<'frame-colors.frame-colors', true>;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    model_name: Schema.Attribute.String;
    watch_model_manufacturer: Schema.Attribute.String;
    watch_model_name: Schema.Attribute.String;
    watch_sizes: Schema.Attribute.Component<'watch-sizes.watch-sizes', true>;
  };
}

export interface WatchSizesWatchSizes extends Struct.ComponentSchema {
  collectionName: 'components_watch_sizes_watch_sizes';
  info: {
    displayName: 'watch_sizes';
  };
  attributes: {
    watch_size: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'frame-colors.frame-colors': FrameColorsFrameColors;
      'watch-model.watch-model': WatchModelWatchModel;
      'watch-sizes.watch-sizes': WatchSizesWatchSizes;
    }
  }
}
