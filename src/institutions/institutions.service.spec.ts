import { Test, TestingModule } from '@nestjs/testing';
import { Institution, InstitutionDocument } from './schemas/institution.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { InstitutionsService } from './institutions.service';

describe('InstitutionsService', () => {
  let service: InstitutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InstitutionsService,
        {
          provide: getModelToken(Institution.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<InstitutionsService>(InstitutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
