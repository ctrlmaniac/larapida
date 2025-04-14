import { constants } from '@larapida/server-config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: constants.DB.USER,
  password: constants.DB.PASS,
  database: constants.DB.NAME,
  entities: ['entities/*.ts'],
  seeds: ['seeds/*.ts'],
  logging: true,
  synchronize: true,
  seedTracking: false,
};

export const appDataSource = new DataSource(options);
