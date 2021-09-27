import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

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
