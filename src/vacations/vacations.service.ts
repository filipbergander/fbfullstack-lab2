import { Injectable } from '@nestjs/common';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class VacationsService {
  constructor(private readonly prismaService: PrismaService) { }

  create(createVacationDto: CreateVacationDto) {
    return this.prismaService.vacation.create({ data: createVacationDto });
  }

  findAll() {
    return this.prismaService.vacation.findMany();
  }

  findOne(id: number) {
    return this.prismaService.vacation.findUnique({ where: { id } });
  }

  update(id: number, updateVacationDto: UpdateVacationDto) {
    return this.prismaService.vacation.update({
      where: { id },
      data: updateVacationDto,
    });
  }

  remove(id: number) {
    return this.prismaService.vacation.delete({ where: { id } });
  }
}
