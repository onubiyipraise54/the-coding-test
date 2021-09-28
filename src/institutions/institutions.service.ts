import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GenericCrudService } from '../generic.crud.service';
import { IInstitution } from 'src/interfaces';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionsService extends GenericCrudService<
  IInstitution,
  CreateInstitutionDto,
  UpdateInstitutionDto
> {
  protected readonly name = 'Institution';

  constructor(
    @InjectModel('Institution')
    protected readonly model: Model<IInstitution>,
  ) {
    super(model);
  }
}
