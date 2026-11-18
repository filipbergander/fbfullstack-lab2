import { PartialType } from '@nestjs/mapped-types';
import { CreateVacationDto } from './create-vacation.dto.js';

export class UpdateVacationDto extends PartialType(CreateVacationDto) {}
