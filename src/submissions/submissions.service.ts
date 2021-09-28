import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GenericCrudService } from '../generic.crud.service';
import { IRankingQuery, ISubmission, ResponsePayload } from 'src/interfaces';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Injectable()
export class SubmissionsService extends GenericCrudService<
  ISubmission,
  CreateSubmissionDto,
  UpdateSubmissionDto
> {
  protected readonly name = 'Submission';

  constructor(
    @InjectModel('Submission')
    protected readonly model: Model<ISubmission>,
  ) {
    super(model);
  }

  async rankInstitutionBySubject(
    payload: IRankingQuery,
  ): Promise<ResponsePayload<any[]>> {
    let response: ResponsePayload<any[]> = {
      success: true,
    };
    try {
      const results = await this.model
        .find({ 'subjects.name': payload.subject, year: +payload.year })
        .populate('institution_id');

      response.data = results
        .map((r) => {
          const xx = {
            institution_id: r.institution_id,
            student_rating: r.subjects.find((ss) => ss.name === payload.subject)
              ?.student_rating,
          };

          return xx;
        })
        .sort((a, b) => b.student_rating - a.student_rating);
    } catch (err) {
      response = { success: false, message: err.message };
    }
    return response;
  }
}
