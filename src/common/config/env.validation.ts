/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

import { plainToClass } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

export enum EnvKey {
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_NAME = 'DB_NAME',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
}

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsString()
  DB_HOST: string;
  @IsNumber()
  DB_PORT: number;
  @IsString()
  DB_NAME: string;
  @IsString()
  DB_USERNAME: string;
  @IsString()
  DB_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  console.log(config);
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
