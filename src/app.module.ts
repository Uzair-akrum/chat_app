import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
 
@Module({
  imports: [ CommonModule, MessageModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
