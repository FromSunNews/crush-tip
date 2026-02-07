import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);
  private readonly supabase: SupabaseClient;
  private readonly bucket = 'screenshots';

  constructor(private readonly configService: ConfigService) {
    this.supabase = createClient(
      this.configService.get<string>('supabase.url'),
      this.configService.get<string>('supabase.serviceKey'),
    );
  }

  async upload(file: Express.Multer.File, userId: string): Promise<string> {
    const fileName = `${userId}/${Date.now()}-${file.originalname}`;

    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      this.logger.error('Upload failed', error);
      throw new Error(`Upload failed: ${error.message}`);
    }

    const { data } = this.supabase.storage
      .from(this.bucket)
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async getFileAsBase64(file: Express.Multer.File): Promise<string> {
    return file.buffer.toString('base64');
  }

  async delete(url: string): Promise<void> {
    const path = url.split(`${this.bucket}/`)[1];
    if (!path) return;

    const { error } = await this.supabase.storage
      .from(this.bucket)
      .remove([path]);

    if (error) {
      this.logger.error('Delete failed', error);
    }
  }
}
