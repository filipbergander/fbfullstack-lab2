import { Transform } from 'class-transformer';
import { IsString, IsInt, IsBoolean, IsDate, IsNotEmpty, Min, Max, MaxLength, MinLength } from 'class-validator';

export class CreateVacationDto {
    // Felmeddelande för titel (title)
    @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
    @IsString({ message: 'Titel behöver vara en textsträng!' })
    @IsNotEmpty({ message: 'Titel behöver anges!' })
    @MaxLength(40, { message: 'Titeln kan max vara 40 tecken!' })
    @MinLength(1, { message: 'Titeln behöver vara minst ett tecken!' })
    title: string;

    // Felmeddelande för antal dagar (vacationDays)
    @IsInt({ message: 'Antal dagar behöver vara ett heltal!' })
    @Min(1, { message: 'Resan behöver vara minst 1 dag!' })
    @Max(366, { message: 'Resan kan max vara 366 dagar!' })
    vacationDays: number;

    // Felmeddelande för booleanen besökt (visited)
    @IsBoolean({ message: 'Ange om du har besökt resmålet eller inte!' })
    visited: boolean;
}
