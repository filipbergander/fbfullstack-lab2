import { Module } from '@nestjs/common';
import { VacationsService } from './vacations.service.js';
import { VacationsController } from './vacations.controller.js';

@Module({
  controllers: [VacationsController],
  providers: [VacationsService],
})
export class VacationsModule {
  id: number;
  title: string;
  vacationDays: number;
  visited: boolean;
  createdAt: Date;
}
