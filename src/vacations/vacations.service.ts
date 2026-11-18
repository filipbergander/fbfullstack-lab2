import { Injectable } from '@nestjs/common';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class VacationsService {
constructor (private readonly prismaService: PrismaService) {}

  create(createVacationDto: CreateVacationDto) {
    return 'This action adds a new vacation';
  }

  findAll() {
    return this.prismaService.vacation.findMany();
    //return `This action returns all vacations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vacation`;
  }

  update(id: number, updateVacationDto: UpdateVacationDto) {
    return `This action updates a #${id} vacation`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacation`;
  }
}
