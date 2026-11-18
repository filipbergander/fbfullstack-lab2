import { PartialType } from '@nestjs/mapped-types';
import { CreateVacationDto } from './create-vacation.dto.js';

// Uppdaterar en del av resmålets information, titel, dagar och man besökt det eller inte
export class UpdateVacationDto extends PartialType(CreateVacationDto) {}
