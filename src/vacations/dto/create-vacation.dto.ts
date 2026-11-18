import { IsString, IsInt, IsBoolean, IsDate, IsNotEmpty, Min } from 'class-validator';

export class CreateVacationDto {
    @IsString({ message: 'Titel behöver vara en textsträng!' })
    @IsNotEmpty({ message: 'Titel behöver anges!' })
    title: string;

    @IsInt( { message: 'Antal dagar behöver vara ett heltal!' })
    @Min(1, { message: 'Resan behöver vara minst 1 dag!' })
    vacationDays: number;

    @IsBoolean({ message: 'Ange om du har besökt resmålet eller inte!' })
    visited: boolean;
}
    