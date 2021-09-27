import { Institution } from './../../institutions/schemas/institution.schema';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject } from './subject.schema';

export type SubmissionDocument = Submission & Document;

@Schema({ versionKey: false, timestamps: true })
export class Submission {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: true,
    ref: 'Institution',
  })
  institution_id: Institution;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  students_total: number;

  @Prop({ required: true })
  undergraduates_total: number;

  @Prop({ required: true })
  postgraduates_total: number;

  @Prop({ required: true })
  staff_total: number;

  @Prop({ required: true })
  academic_papers: number;

  @Prop({ type: MongooseSchema.Types.Decimal128, required: true })
  institution_income: Types.Decimal128;

  @Prop({ required: true })
  subjects: Subject[];
}

export const UserSchema = SchemaFactory.createForClass(Submission);
