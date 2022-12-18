import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderDto } from 'src/order/entity/order.entity';

export class CreateOrderReqDto {
  @IsNumber()
  @Type(() => Number)
  amount: number;
}

export class CreateOrderResDto extends OrderDto {}
