import { Repository } from 'typeorm';

import { CustomRepository } from 'src/common/decorator/database/repository.decorator';
import { Order } from '../entity/order.entity';

@CustomRepository(Order)
export class OrderRepository extends Repository<Order> {}
