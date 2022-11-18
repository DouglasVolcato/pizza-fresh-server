import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Represents the table number.',
    example: 1,
  })
  number: number;
}
