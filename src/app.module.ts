import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { OrderModule } from './order/order.module';
import { validate } from './common/config/env.validation';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: path.resolve(__dirname, '../.env'),
    }),
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
