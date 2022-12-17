/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { DataSource } from 'typeorm';

const devDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '',
  database: process.env.DB_NAME || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  port: parseInt(process.env.DB_PORT) || 3306,
  logging: true,
  entities: ['src/**/*.entity.ts'],
  charset: 'utf8mb4_bin',
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  migrationsRun: true,
});

export default devDataSource;
