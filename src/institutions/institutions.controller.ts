import { QueryDto, IDPayloadDto } from './../misc.dto';
import {
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
  HttpStatus,
  Controller,
  HttpException,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  async create(@Body() createInstitutionDto: CreateInstitutionDto) {
    const result = await this.institutionsService.create(createInstitutionDto);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Get()
  async findAll(@Query() payload: QueryDto) {
    const result = await this.institutionsService.find(
      JSON.parse(payload.q || '{}'),
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return { ...result, count: result.data.length };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.institutionsService.findOne(+id);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Patch(':id')
  async update(
    @Param() params: IDPayloadDto,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
  ) {
    const result = await this.institutionsService.update(
      params.id,
      updateInstitutionDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Delete(':id')
  async remove(@Param() params: IDPayloadDto) {
    const result = await this.institutionsService.remove(params.id);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}
