import { Type } from 'class-transformer';
import { IsArray, ValidateNested, IsEnum, IsNumber } from 'class-validator';

import { OrderDto, OrderStatus } from 'src/order/entity/order.entity';

class CreateOrderDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsNumber()
  @Type(() => Number)
  amount: number;
}

export class CreateBulkOrderReqDto {
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDto)
  @IsArray()
  orders: CreateOrderDto[];
}

export class CreateBulkOrderResDto extends OrderDto {}
