import { IsDateString, IsEnum, IsNumber } from 'class-validator';

import { Exclude, Type } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Order } from './order.entity';

export enum OrderHistoryStatus {
  PENDING = 'pending',
  FAILURE = 'failure',
  COMPLETE = 'complete',
}

export class OrderHistoryDto {
  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsEnum(OrderHistoryStatus)
  status: OrderHistoryStatus;

  @IsNumber()
  @Type(() => Number)
  amount: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}

@Entity()
export class OrderHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OrderHistoryStatus,
    default: OrderHistoryStatus.PENDING,
  })
  status: OrderHistoryStatus;

  @Column()
  amount: number;

  @ManyToOne(() => Order, (order) => order.orderHistories)
  order: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;
}
