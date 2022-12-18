import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { OrderDto } from 'src/order/entity/order.entity';

export class UpdateOrderReqDto {
  @IsNumber()
  @Type(() => Number)
  amount: number;
}

export class UpdateOrderResDto extends OrderDto {}
