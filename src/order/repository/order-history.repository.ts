import { Repository } from 'typeorm';

import { CustomRepository } from 'src/common/decorator/database/repository.decorator';
import { OrderHistory } from '../entity/order-history.entity';

@CustomRepository(OrderHistory)
export class OrderHistoryRepository extends Repository<OrderHistory> {}
