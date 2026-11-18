import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { VacationsService } from './vacations.service.js';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';

@Controller('vacations')
export class VacationsController {
  constructor(private readonly vacationsService: VacationsService) { }

  // Skapar ett nytt resmål
  @Post()
  create(@Body() createVacationDto: CreateVacationDto) {
    return this.vacationsService.create(createVacationDto);
  }

  // Hämtar alla resmål
  @Get()
  findAll() {
    return this.vacationsService.findAll();
  }

  // Hämtar ett specifikt resmål genom id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.vacationsService.findOne(id);
  }
  // Uppdaterar ett resmål med id
  @Put(':id')
  replace(@Param('id', ParseIntPipe) id: number, @Body() updateVacationDto: UpdateVacationDto) {
    return this.vacationsService.update(id, updateVacationDto);
  }

  // Tar bort ett befintligt resmål genom id
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vacationsService.remove(id);
  }

  /*@Patch(':id')
update(@Param('id', ParseIntPipe) id: number, @Body() updateVacationDto: UpdateVacationDto) {
  return this.vacationsService.update(id, updateVacationDto);
}*/
  // Uppdaterar ett befintligt resmål genom id
}
