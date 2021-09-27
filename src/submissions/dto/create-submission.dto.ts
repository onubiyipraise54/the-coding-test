import { ObjectId, Decimal128 } from 'mongoose';
import { Type } from 'class-transformer';
import {
  IsString,
  IsArray,
  IsNumber,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  academic_papers: number;

  @IsNotEmpty()
  @IsNumber()
  students_total: number;

  @IsNotEmpty()
  @IsNumber()
  student_rating: number;
}

export class CreateSubmissionDto {
  @IsNotEmpty()
  @IsString()
  institution_id: ObjectId;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsNumber()
  students_total: number;

  @IsNotEmpty()
  @IsNumber()
  undergraduates_total: number;

  @IsNotEmpty()
  @IsNumber()
  postgraduates_total: number;

  @IsNotEmpty()
  @IsNumber()
  staff_total: number;

  @IsNotEmpty()
  @IsNumber()
  academic_papers: Decimal128 | number;

  @IsNotEmpty()
  @IsNumber()
  institution_income: number;

  @ValidateNested()
  @IsArray()
  @Type(() => CreateSubjectDto)
  subjects: CreateSubjectDto;
}
