import { HttpService } from '@nestjs/axios';
import { Response } from 'express';
import { WatchModelDetailedDto } from './dto/watch-model-detailed.dto';
export declare class WatchModelsController {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(): Promise<WatchModelDetailedDto[]>;
    getImage(imageName: string, res: Response): Promise<void>;
}
