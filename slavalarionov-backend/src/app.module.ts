import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WatchModelsController } from './watch-models.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, WatchModelsController],
  providers: [AppService],
})
export class AppModule {}