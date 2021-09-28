import { Test, TestingModule } from '@nestjs/testing';
import { Institution } from './schemas/institution.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsService } from './institutions.service';

describe('InstitutionsController', () => {
  let controller: InstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionsController],
      providers: [
        InstitutionsService,
        {
          provide: getModelToken(Institution.name),
          useValue: Model,
        },
      ],
    }).compile();

    controller = module.get<InstitutionsController>(InstitutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
