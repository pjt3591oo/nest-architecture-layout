import { Injectable } from '@nestjs/common';
import { OrderHistoryReader } from '../provider/order-history-reader';
import { OrderHistoryCreater } from '../provider/order-history-creater';
import { OrderHistoryUpdater } from '../provider/order-history-updater';
import { OrderHistoryDeleter } from '../provider/order-history-deleter';

@Injectable()
export class OrderHistoryService {
  constructor(
    private readonly orderHistoryReader: OrderHistoryReader,
    private readonly orderHistoryCreater: OrderHistoryCreater,
    private readonly orderHistoryUpdater: OrderHistoryUpdater,
    private readonly orderHistoryDeleter: OrderHistoryDeleter,
  ) {}
}
