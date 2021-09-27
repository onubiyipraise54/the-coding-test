import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type InstitutionDocument = Institution & Document;

@Schema({ versionKey: false, timestamps: true })
export class Institution {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  region: string;
}

export const InstitutionSchema = SchemaFactory.createForClass(Institution);
