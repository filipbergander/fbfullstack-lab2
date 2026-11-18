import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { VacationsService } from './vacations.service.js';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';

@Controller('vacations')
export class VacationsController {
  constructor(private readonly vacationsService: VacationsService) { }

  @Post()
  create(@Body() createVacationDto: CreateVacationDto) {
    return this.vacationsService.create(createVacationDto);
  }

  @Get()
  findAll() {
    return this.vacationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vacationsService.findOne(id);
  }

  @Put(':id')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVacationDto: UpdateVacationDto) {
    return this.vacationsService.update(id, updateVacationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vacationsService.remove(id);
  }
}
