import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GenericCrudService } from 'src/generic.crud.service';
import { ISubmission } from 'src/interfaces';
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
}
