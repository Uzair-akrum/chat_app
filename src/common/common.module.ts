import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { DatabaseModule, MongoModule } from './mongo.module';

@Module({
  imports: [ConfigModule, MongoModule,DatabaseModule],
  exports: [ConfigModule, MongoModule],
})
export class CommonModule {}
