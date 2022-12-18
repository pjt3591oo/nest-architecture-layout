import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvKey } from '../config/env.validation';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get(EnvKey.DB_HOST),
        port: config.get(EnvKey.DB_PORT),
        database: config.get(EnvKey.DB_NAME),
        username: config.get(EnvKey.DB_USERNAME),
        password: config.get(EnvKey.DB_PASSWORD),
        synchronize: false,
        logging: false,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        charset: 'utf8mb4_bin',
      }),
    }),
  ],
})
export class DatabaseModule {}
