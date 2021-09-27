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
import { SubmissionsService } from './submissions.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    const result = await this.submissionsService.create(createSubmissionDto);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Get()
  async findAll(@Query() payload: QueryDto) {
    const result = await this.submissionsService.find(
      JSON.parse(payload.q || '{}'),
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return { ...result, count: result.data.length };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.submissionsService.findOne(+id);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Patch(':id')
  async update(
    @Param() params: IDPayloadDto,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    const result = await this.submissionsService.update(
      params.id,
      updateSubmissionDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Delete(':id')
  async remove(@Param() params: IDPayloadDto) {
    const result = await this.submissionsService.remove(params.id);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}
