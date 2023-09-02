

import { Schema, Prop, SchemaFactory } from  "@nestjs/mongoose";
import { Document } from 'mongoose';
import { User } from  "../../user/entities/user.entity";

@Schema()
export class Message extends Document {
  @Prop()
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: User })  
  user: User;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
