import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { getSystemPrompt, getUserMessage, Language } from './prompts';

export interface AiSuggestion {
  tone: string;
  text: string;
}

export interface AiResponse {
  suggestions: AiSuggestion[];
  context: string;
}

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly openai: OpenAI;
  private readonly model = 'gpt-4o-mini';

  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('openai.apiKey'),
    });
  }

  async generateSuggestions(
    imageBase64: string,
    personality?: string,
    age?: number,
    gender?: string,
    language: Language = 'vi',
  ): Promise<{ data: AiResponse; processingTime: number }> {
    const startTime = Date.now();

    const systemPrompt = getSystemPrompt(language);
    const userMsg = getUserMessage(language, personality, age, gender);

    const response = await this.openai.chat.completions.create({
      model: this.model,
      response_format: { type: 'json_object' },
      max_tokens: 500,
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            { type: 'text', text: userMsg },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
                detail: 'low',
              },
            },
          ],
        },
      ],
    });

    const processingTime = (Date.now() - startTime) / 1000;
    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error('No response from AI');
    }

    this.logger.log(`AI response in ${processingTime}s`);

    const data: AiResponse = JSON.parse(content);
    return { data, processingTime };
  }
}
