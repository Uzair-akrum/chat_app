import { Module } from '@nestjs/common';
    import { ConfigService } from '@nestjs/config';
    import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>(
        {
          uri: configService.get<string>('MONGODB_URL'),

      }),
      inject: [ConfigService],
    }),
  ],
})
 
export class DatabaseModule {
    constructor(private configService: ConfigService) {

      // Access and log configuration values here
      const mongoUri = this.configService.get<string>('MONGODB_URL');
      console.log(`MongoDB URI: ${mongoUri}`);
    }
  }
  export class MongoModule {}