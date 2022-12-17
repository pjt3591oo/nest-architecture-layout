import { Controller } from '@nestjs/common';
import { OrderHistoryService } from '../service/order-history.service';

@Controller('order-history')
export class OrderHistoryController {
  constructor(private readonly orderHistoryService: OrderHistoryService) {}
}
