import { Module } from '@nestjs/common';

import { OrderHistoryController } from './controller/order-history.controller';
import { OrderController } from './controller/order.controller';

import { OrderHistoryService } from './service/order-history.service';
import { OrderService } from './service/order.service';

import { OrderReader } from './provider/order-reader';
import { OrderCreater } from './provider/order-creater';
import { OrderUpdater } from './provider/order-updater';
import { OrderDeleter } from './provider/order-deleter';
import { OrderHistoryReader } from './provider/order-history-reader';
import { OrderHistoryCreater } from './provider/order-history-creater';
import { OrderHistoryUpdater } from './provider/order-history-updater';
import { OrderHistoryDeleter } from './provider/order-history-deleter';
import { OrderRepository } from './repository/order.repository';
import { OrderHistoryRepository } from './repository/order-history.repository';
import { TypeOrmRepositoryModule } from 'src/common/decorator/database/repository.module';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmRepositoryModule.forFeatures([
      OrderRepository,
      OrderHistoryRepository,
    ]),
  ],
  controllers: [OrderController, OrderHistoryController],
  providers: [
    OrderService,
    OrderHistoryService,
    OrderReader,
    OrderCreater,
    OrderUpdater,
    OrderDeleter,
    OrderHistoryReader,
    OrderHistoryCreater,
    OrderHistoryUpdater,
    OrderHistoryDeleter,
  ],
})
export class OrderModule {}
