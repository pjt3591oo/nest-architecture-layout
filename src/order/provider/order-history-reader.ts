import { Injectable } from '@nestjs/common';
import { OrderHistoryRepository } from '../repository/order-history.repository';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class OrderHistoryReader {
  constructor(
    private readonly orderHistoryRepository: OrderHistoryRepository,
  ) {}

  async readAllByOrderId(orderId: number, query: PaginationQueryReqDto) {
    return this.orderHistoryRepository.readAllByOrderId(orderId, query);
  }
}
