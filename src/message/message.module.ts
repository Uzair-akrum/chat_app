import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/messages/entities/message.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Message', schema: MessageSchema },
    ]),
  ],
  providers: [MessageGateway, MessageService],
})
export class MessageModule {}
