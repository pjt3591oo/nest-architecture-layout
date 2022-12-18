import { Repository } from 'typeorm';

import { CustomRepository } from 'src/common/decorator/database/repository.decorator';
import {
  OrderHistory,
  OrderHistoryStatus,
} from '../entity/order-history.entity';
import { Order, OrderStatus } from '../entity/order.entity';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';

@CustomRepository(OrderHistory)
export class OrderHistoryRepository extends Repository<OrderHistory> {
  async bulkSaveByOrder(orders: Order[]) {
    for await (const order of orders) {
      await this.save({
        amount: order.amount,
        status: this.#getStatusFromOrderStatus(order.status),
        order,
      });
    }
  }

  readAllByOrderId(orderId: number, { page, limit }: PaginationQueryReqDto) {
    return this.createQueryBuilder('orderHistory')
      .leftJoin('orderHistory.order', 'order')
      .where('order.id =:orderId', { orderId })
      .orderBy('orderHistory.id', 'DESC')
      .skip(page * limit)
      .take(limit)
      .getMany();
  }

  #getStatusFromOrderStatus(orderStatus: OrderStatus): OrderHistoryStatus {
    switch (orderStatus) {
      case OrderStatus.PENDING:
        return OrderHistoryStatus.PENDING;
      case OrderStatus.FAILURE:
        return OrderHistoryStatus.FAILURE;
      default:
        return OrderHistoryStatus.COMPLETE;
    }
  }
}
