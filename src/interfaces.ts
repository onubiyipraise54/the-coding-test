import { Document, ObjectId } from 'mongoose';

export interface ResponsePayload<D> {
  success: boolean;
  message?: string;
  data?: D;
}

export interface IInstitution extends Document {
  name: string;
  address: string;
  country: string;
  region: string;
}

export interface ISubject extends Document {
  name: string;
  academic_papers: number;
  students_total: number;
  student_rating: number;
}

export interface ISubmission extends Document {
  institution_id: ObjectId;
  year: number;
  students_total: number;
  undergraduates_total: number;
  postgraduates_total: number;
  staff_total: number;
  academic_papers: number;
  institution_income: number;
  subjects: ISubject[];
}

export interface IRankingQuery {
  subject: string;
  year: string;
}
