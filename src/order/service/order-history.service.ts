import { Injectable } from '@nestjs/common';
import { OrderHistoryReader } from '../provider/order-history-reader';
import { ReadAllOrderHistoryResDto } from '../dto/order-history/read-all-order-history.dto';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class OrderHistoryService {
  constructor(private readonly orderHistoryReader: OrderHistoryReader) {}

  async readAllOrderHistory(
    orderId: number,
    query: PaginationQueryReqDto,
  ): Promise<ReadAllOrderHistoryResDto[]> {
    return await this.orderHistoryReader.readAllByOrderId(orderId, query);
  }
}
