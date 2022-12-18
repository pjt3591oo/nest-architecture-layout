import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationQueryReqDto {
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  page = 0;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit = 5;
}
