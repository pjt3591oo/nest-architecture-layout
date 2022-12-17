import { Injectable } from '@nestjs/common';
import { OrderDeleter } from '../provider/order-deleter';
import { OrderUpdater } from '../provider/order-updater';
import { OrderCreater } from '../provider/order-creater';
import { OrderReader } from '../provider/order-reader';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderReader: OrderReader,
    private readonly orderCreater: OrderCreater,
    private readonly orderUpdater: OrderUpdater,
    private readonly orderDeleter: OrderDeleter,
  ) {}
}
