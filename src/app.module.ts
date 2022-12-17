import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { OrderModule } from './order/order.module';
import { validate } from './common/config/env.validation';
import * as path from 'path';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: path.resolve(__dirname, '../.env'),
    }),
    DatabaseModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
