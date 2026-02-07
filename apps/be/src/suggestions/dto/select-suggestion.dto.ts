import { IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SelectSuggestionDto {
  @ApiProperty({ example: 0, description: 'Index of selected suggestion (0, 1, or 2)' })
  @IsInt()
  @Min(0)
  @Max(2)
  selectedIndex: number;
}
