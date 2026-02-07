import {
  Controller,
  Post,
  Patch,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { SuggestionsService } from './suggestions.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { SelectSuggestionDto } from './dto/select-suggestion.dto';

@ApiTags('suggestions')
@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Post('with-screenshot')
  @ApiOperation({ summary: 'Upload screenshot and get AI suggestions' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['screenshot', 'userId'],
      properties: {
        screenshot: { type: 'string', format: 'binary' },
        userId: { type: 'string', example: 'uuid-here' },
        personality: { type: 'string', example: 'playful' },
        age: { type: 'integer', example: 22 },
        gender: { type: 'string', example: 'male' },
        language: { type: 'string', enum: ['vi', 'en'], example: 'vi' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('screenshot'))
  async createWithScreenshot(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/i }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() dto: CreateSuggestionDto,
  ) {
    return this.suggestionsService.createWithScreenshot(dto, file);
  }

  @Patch(':id/select')
  @ApiOperation({ summary: 'Track which suggestion was copied' })
  async selectSuggestion(
    @Param('id') id: string,
    @Body() dto: SelectSuggestionDto,
  ) {
    return this.suggestionsService.selectSuggestion(id, dto);
  }
}
