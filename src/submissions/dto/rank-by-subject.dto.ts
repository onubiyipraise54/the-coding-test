import { IsString, IsNotEmpty } from 'class-validator';

export class RankingQueryDto {
  @IsNotEmpty()
  @IsString()
  readonly subject: string;

  @IsNotEmpty()
  @IsString()
  readonly year: string;
}
