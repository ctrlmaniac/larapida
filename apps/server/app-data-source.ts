import { constants } from '@larapida/server-config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: constants.DB.USER,
  password: constants.DB.PASS,
  database: constants.DB.NAME,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/migrations/*.js'],
  seeds: [__dirname + '/seeds/*.js'],
  logging: true,
  synchronize: false,
  migrationsRun: true,
  driver: require('mysql2'),
};

export const AppDataSource = new DataSource(options);
