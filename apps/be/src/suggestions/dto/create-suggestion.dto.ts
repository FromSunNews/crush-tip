import { IsString, IsOptional, IsInt, Min, Max, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSuggestionDto {
  @ApiProperty({ example: 'uuid-here' })
  @IsString()
  userId: string;

  @ApiPropertyOptional({ example: 'playful' })
  @IsOptional()
  @IsString()
  personality?: string;

  @ApiPropertyOptional({ example: 22 })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(99)
  age?: number;

  @ApiPropertyOptional({ example: 'male' })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiPropertyOptional({ example: 'vi', enum: ['vi', 'en'] })
  @IsOptional()
  @IsIn(['vi', 'en'])
  language?: 'vi' | 'en';
}
