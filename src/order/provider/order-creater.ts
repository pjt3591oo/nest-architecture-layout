import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/order/repository/order.repository';
import { CreateOrderReqDto } from 'src/order/dto/order/create-order-dto';
import { CreateBulkOrderReqDto } from 'src/order/dto/order/create-bulk-order.dto';
import { OrderHistoryRepository } from 'src/order/repository/order-history.repository';

@Injectable()
export class OrderCreater {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderHistoryRepository: OrderHistoryRepository,
  ) {}

  async create(createOrderReqDto: CreateOrderReqDto) {
    const order = await this.orderRepository.save(createOrderReqDto);
    await this.orderHistoryRepository.save({
      ...createOrderReqDto,
      order,
    });
    return order;
  }

  async bulkCreate({ orders }: CreateBulkOrderReqDto) {
    const didCreateOrders = await this.orderRepository.save(orders);
    await this.orderHistoryRepository.bulkSaveByOrder(didCreateOrders);
    return didCreateOrders;
  }
}
