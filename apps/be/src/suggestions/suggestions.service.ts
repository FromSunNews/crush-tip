import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../ai/ai.service';
import { StorageService } from '../storage/storage.service';
import { UsersService } from '../users/users.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { SelectSuggestionDto } from './dto/select-suggestion.dto';

@Injectable()
export class SuggestionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AiService,
    private readonly storageService: StorageService,
    private readonly usersService: UsersService,
  ) {}

  async createWithScreenshot(
    dto: CreateSuggestionDto,
    file: Express.Multer.File,
  ) {
    // Verify user exists
    await this.usersService.findById(dto.userId);

    // Upload screenshot and get base64 in parallel
    const [screenshotUrl, imageBase64] = await Promise.all([
      this.storageService.upload(file, dto.userId),
      this.storageService.getFileAsBase64(file),
    ]);

    // Generate AI suggestions
    const { data, processingTime } = await this.aiService.generateSuggestions(
      imageBase64,
      dto.personality,
      dto.age,
      dto.gender,
      dto.language || 'vi',
    );

    // Save suggestion and increment user request count
    const [suggestion] = await Promise.all([
      this.prisma.suggestion.create({
        data: {
          userId: dto.userId,
          screenshotUrl,
          suggestions: data.suggestions as any,
          processingTime,
          model: 'gpt-4o-mini',
        },
      }),
      this.usersService.incrementTotalRequests(dto.userId),
    ]);

    return {
      id: suggestion.id,
      suggestions: data.suggestions,
      context: data.context,
      processingTime,
    };
  }

  async selectSuggestion(id: string, dto: SelectSuggestionDto) {
    const suggestion = await this.prisma.suggestion.findUnique({
      where: { id },
    });

    if (!suggestion) {
      throw new NotFoundException(`Suggestion ${id} not found`);
    }

    return this.prisma.suggestion.update({
      where: { id },
      data: { selectedIndex: dto.selectedIndex },
    });
  }
}
