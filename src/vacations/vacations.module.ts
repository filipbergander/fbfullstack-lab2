import { Module } from '@nestjs/common';
import { VacationsService } from './vacations.service.js';
import { VacationsController } from './vacations.controller.js';

@Module({
  controllers: [VacationsController],
  providers: [VacationsService],
})
export class VacationsModule {}
