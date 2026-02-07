import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { AiModule } from './ai/ai.module';
import { StorageModule } from './storage/storage.module';
import { appConfig, databaseConfig, supabaseConfig, openaiConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
      load: [appConfig, databaseConfig, supabaseConfig, openaiConfig],
    }),
    PrismaModule,
    UsersModule,
    SuggestionsModule,
    AiModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
