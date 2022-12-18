import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/order/repository/order.repository';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class OrderReader {
  constructor(private readonly orderRepository: OrderRepository) {}

  readById(orderId: number) {
    return this.orderRepository.findOneOrFail({
      where: {
        id: orderId,
      },
    });
  }

  readAll({ page, limit }: PaginationQueryReqDto) {
    return this.orderRepository.find({
      take: limit,
      skip: limit * page,
    });
  }
}
