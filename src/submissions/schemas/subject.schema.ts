import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Subject {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  academic_papers: number;

  @Prop({ required: true })
  students_total: number;

  @Prop({ required: true })
  student_rating: number;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
