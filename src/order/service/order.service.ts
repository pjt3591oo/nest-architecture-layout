import { Injectable } from '@nestjs/common';
import { OrderDeleter } from '../provider/order-deleter';
import { OrderUpdater } from '../provider/order-updater';
import { OrderCreater } from '../provider/order-creater';
import { OrderReader } from '../provider/order-reader';
import {
  CreateOrderReqDto,
  CreateOrderResDto,
} from '../dto/order/create-order-dto';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';
import {
  CreateBulkOrderReqDto,
  CreateBulkOrderResDto,
} from '../dto/order/create-bulk-order.dto';
import {
  UpdateOrderReqDto,
  UpdateOrderResDto,
} from '../dto/order/update-order.dto';
import { ReadOrderResDto } from '../dto/order/read-order.dto';
import { ReadAllOrderResDto } from '../dto/order/read-all-order.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderReader: OrderReader,
    private readonly orderCreater: OrderCreater,
    private readonly orderUpdater: OrderUpdater,
    private readonly orderDeleter: OrderDeleter,
  ) {}

  readAllOrder(query: PaginationQueryReqDto): Promise<ReadAllOrderResDto[]> {
    return this.orderReader.readAll(query);
  }

  readOrder(orderId: number): Promise<ReadOrderResDto> {
    return this.orderReader.readById(orderId);
  }

  createOrder(
    createOrderReqDto: CreateOrderReqDto,
  ): Promise<CreateOrderResDto> {
    return this.orderCreater.create(createOrderReqDto);
  }

  createBulkOrder(
    createBulkOrderReqDto: CreateBulkOrderReqDto,
  ): Promise<CreateBulkOrderResDto[]> {
    return this.orderCreater.bulkCreate(createBulkOrderReqDto);
  }

  updateOrder(
    orderId: number,
    updateOrderReqDto: UpdateOrderReqDto,
  ): Promise<UpdateOrderResDto> {
    return this.orderUpdater.update(orderId, updateOrderReqDto);
  }

  async deleteOrder(orderId: number): Promise<boolean> {
    try {
      await this.orderDeleter.delete(orderId);
      return true;
    } catch {
      return false;
    }
  }
}
