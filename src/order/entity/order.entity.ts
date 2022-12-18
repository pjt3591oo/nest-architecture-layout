import { IsDateString, IsEnum, IsNumber } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { OrderHistory } from './order-history.entity';

export enum OrderStatus {
  PENDING = 'pending',
  FAILURE = 'failure',
  COMPLETE = 'complete',
}

export class OrderDto {
  @IsNumber()
  @Type(() => Number)
  id: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsNumber()
  @Type(() => Number)
  amount: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column()
  amount: number;

  @OneToMany(() => OrderHistory, (orderHistory) => orderHistory.order)
  orderHistories: OrderHistory[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;
}
