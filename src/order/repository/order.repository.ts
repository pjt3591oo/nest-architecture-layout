import { Repository } from 'typeorm';

import { CustomRepository } from 'src/common/decorator/database/repository.decorator';
import { Order, OrderDto } from '../entity/order.entity';

@CustomRepository(Order)
export class OrderRepository extends Repository<Order> {
  async updateWithAmount(orderId: number, orderDto: OrderDto) {
    const order = await this.findOneByOrFail({
      id: orderId,
    });

    order.amount = orderDto.amount;
    return await this.save(order);
  }

  async deleteById(orderId: number) {
    const order = await this.findOneByOrFail({
      id: orderId,
    });
    await this.softDelete(order);
    return order;
  }
}
