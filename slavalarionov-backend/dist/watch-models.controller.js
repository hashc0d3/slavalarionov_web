"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchModelsController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let WatchModelsController = class WatchModelsController {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    async findAll() {
        const url = process.env.STRAPI_URL +
            '/api/watch-models?populate=watch_model.main_image' +
            '&populate=watch_model.watch_sizes' +
            '&populate=watch_model.frame_colors';
        const token = process.env.STRAPI_TOKEN;
        const response = await this.httpService.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        }).toPromise();
        if (!response?.data) {
            throw new common_1.InternalServerErrorException('Нет данных от Strapi');
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
    async getImage(imageName, res) {
        const url = `${process.env.STRAPI_URL}/uploads/${imageName}`;
        const response = await this.httpService.axiosRef.get(url, { responseType: 'stream' });
        if (!response)
            throw new common_1.InternalServerErrorException('Нет изображения');
        response.data.pipe(res);
    }
};
exports.WatchModelsController = WatchModelsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WatchModelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('image/:imageName'),
    __param(0, (0, common_1.Param)('imageName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WatchModelsController.prototype, "getImage", null);
exports.WatchModelsController = WatchModelsController = __decorate([
    (0, common_1.Controller)('watch-models'),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WatchModelsController);
//# sourceMappingURL=watch-models.controller.js.map