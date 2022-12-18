import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { OrderHistoryService } from '../service/order-history.service';
import { ReadAllOrderHistoryResDto } from '../dto/order-history/read-all-order-history.dto';
import { ApiResponse } from '@nestjs/swagger';
import { PaginationQueryReqDto } from 'src/common/dto/pagination-query.dto';

@Controller('order-history/:orderId')
export class OrderHistoryController {
  constructor(private readonly orderHistoryService: OrderHistoryService) {}

  @ApiResponse({ type: [ReadAllOrderHistoryResDto] })
  @Get()
  readAllOrderHistory(
    @Param('orderId', ParseIntPipe) orderId,
    @Query() query: PaginationQueryReqDto,
  ): Promise<ReadAllOrderHistoryResDto[]> {
    return this.orderHistoryService.readAllOrderHistory(orderId, query);
  }
}
