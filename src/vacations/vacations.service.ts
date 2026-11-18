import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class VacationsService {
  // Konstruktor som tar emot PrismaServicen och gör den användbar i klassen
  constructor(private readonly prismaService: PrismaService) { }

  // Skapar nytt resmål
  async create(createVacationDto: CreateVacationDto) {
    return this.prismaService.vacation.create({ data: createVacationDto });
  }

  // Hämtar alla tillagda resmål
  findAll() {
    return this.prismaService.vacation.findMany();
  }

  // Hittar ett specifikt resmål genom id
  async findOne(id: number) {
    const vacation = await this.prismaService.vacation.findUnique({ where: { id } });
    if (!vacation) {
      throw new NotFoundException(`Resmålet med id: '${id}' kunde inte hittas...`);
    }
    return vacation;
  }

  // Uppdaterar ett befintligt resmål genom id
  async update(id: number, updateVacationDto: UpdateVacationDto) {
    await this.findOne(id);
    const updatedVacation = await this.prismaService.vacation.update({
      where: { id },
      data: updateVacationDto,
    });
    // Lyckat-meddelande som svar tillbaka
    return {
      message: `Resmålet med id '${id}' uppdaterades!`,
      vacation: updatedVacation
    };
  }
  // Tar bort ett befintligt resmål genom id
  async remove(id: number) {
    await this.findOne(id);
    const deletedVacation = await this.prismaService.vacation.delete({ where: { id } });
    // Lyckat-meddelande som svar tillbaka
    return {
      message: `Resmålet med id '${id}' raderades!`,
      vacation: deletedVacation
    }
  }
}
