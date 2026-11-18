import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VacationsModule } from './vacations/vacations.module.js';

@Module({
  imports: [VacationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
