import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiPropertyOptional({ example: 'Minh' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 22 })
  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(99)
  age?: number;

  @ApiPropertyOptional({ example: 'male', enum: ['male', 'female', 'other'] })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiPropertyOptional({ example: 'playful' })
  @IsOptional()
  @IsString()
  personality?: string;
}
