import { Controller, Get, Param, Res, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Response } from 'express';
import { WatchModelsResponse } from './types/watch-models-response';
import { WatchModelDetailedDto } from './dto/watch-model-detailed.dto';

@Controller('watch-models')
export class WatchModelsController {
    constructor(private readonly httpService: HttpService) {}

    @Get()
    async findAll(): Promise<WatchModelDetailedDto[]> {
        const url = process.env.STRAPI_URL +
            '/api/watch-models?populate=watch_model.main_image' +
            '&populate=watch_model.watch_sizes' +
            '&populate=watch_model.frame_colors';
        const token = process.env.STRAPI_TOKEN;
        const response = await this.httpService.get<WatchModelsResponse>(url, {
            headers: { Authorization: `Bearer ${token}` },
        }).toPromise();

        if (!response?.data) {
            throw new InternalServerErrorException('Нет данных от Strapi');
        }

        return response.data.data.map(item => ({
            model_name: item.watch_model.model_name,
            watch_model_name: item.watch_model.watch_model_name,
            watch_model_manufacturer: item.watch_model.watch_model_manufacturer,
            frame_colors: item.watch_model.frame_colors.map(fc => ({
                color_name: fc.color_name,
                color_code: fc.color_code,
                color_title: fc.color_title,
            })),
            watch_sizes: item.watch_model.watch_sizes.map(ws => ws.watch_size),
            main_image_url: item.watch_model.main_image
                ? `${process.env.BACKEND_URL}/watch-models/image/${encodeURIComponent(item.watch_model.main_image.url.split('/').pop() ?? '')}`
                : '',
        }));
    }

    @Get('image/:imageName')
    async getImage(@Param('imageName') imageName: string, @Res() res: Response) {
        const url = `${process.env.STRAPI_URL}/uploads/${imageName}`;
        const response = await this.httpService.axiosRef.get(url, { responseType: 'stream' });
        if (!response) throw new InternalServerErrorException('Нет изображения');
        response.data.pipe(res);
    }
}