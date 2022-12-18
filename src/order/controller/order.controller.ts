import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OrderService } from '../service/order.service';
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
import { ApiResponse } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiResponse({ type: [ReadAllOrderResDto] })
  @Get()
  readAllOrder(
    @Query() query: PaginationQueryReqDto,
  ): Promise<ReadAllOrderResDto[]> {
    return this.orderService.readAllOrder(query);
  }

  @ApiResponse({ type: ReadOrderResDto })
  @Get(':id')
  readOrder(@Param('id', ParseIntPipe) id: number): Promise<ReadOrderResDto> {
    return this.orderService.readOrder(id);
  }

  @ApiResponse({ type: CreateOrderResDto })
  @Post()
  createOrder(
    @Body() createOrderReqDto: CreateOrderReqDto,
  ): Promise<CreateOrderResDto> {
    return this.orderService.createOrder(createOrderReqDto);
  }

  @ApiResponse({ type: [CreateBulkOrderResDto] })
  @Post('bulk')
  createBulkOrder(
    @Body() createBulkOrderReqDto: CreateBulkOrderReqDto,
  ): Promise<CreateBulkOrderResDto[]> {
    return this.orderService.createBulkOrder(createBulkOrderReqDto);
  }

  @ApiResponse({ type: () => UpdateOrderResDto })
  @Put(':id')
  updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderReqDto: UpdateOrderReqDto,
  ): Promise<UpdateOrderResDto> {
    return this.orderService.updateOrder(id, updateOrderReqDto);
  }

  @ApiResponse({ type: Boolean })
  @Delete(':id')
  deleteOrder(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.orderService.deleteOrder(id);
  }
}
