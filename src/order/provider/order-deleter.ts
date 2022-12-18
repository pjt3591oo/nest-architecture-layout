import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/order/repository/order.repository';
import { OrderHistoryRepository } from '../repository/order-history.repository';

@Injectable()
export class OrderDeleter {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderHistoryRepository: OrderHistoryRepository,
  ) {}

  async delete(orderId: number) {
    const order = await this.orderRepository.deleteById(orderId);
    await this.orderHistoryRepository.bulkSaveByOrder([order]);
    return order;
  }
}
