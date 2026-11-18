import { Module } from '@nestjs/common';
import { VacationsService } from './vacations.service.js';
import { VacationsController } from './vacations.controller.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  controllers: [VacationsController],
  providers: [VacationsService, PrismaService],
})
// Resmålsmodellen med alla sina egenskaper
export class VacationsModule {
  id: number;
  title: string;
  vacationDays: number;
  visited: boolean;
  createdAt: Date;
}
