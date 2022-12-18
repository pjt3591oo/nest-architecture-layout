import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/order/repository/order.repository';
import { OrderHistoryRepository } from '../repository/order-history.repository';

@Injectable()
export class OrderUpdater {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderHistoryRepository: OrderHistoryRepository,
  ) {}

  async update(orderId: number, orderUpdateReqDto) {
    const order = await this.orderRepository.updateWithAmount(
      orderId,
      orderUpdateReqDto,
    );
    await this.orderHistoryRepository.bulkSaveByOrder([order]);
    return order;
  }
}
