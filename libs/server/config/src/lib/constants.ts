import { getEnv } from '@larapida/server-helpers';

export const constants = {
  PORT: Number.parseInt(process.env.PORT ?? '3000'),
  DB: {
    NAME: getEnv(process.env.DB_NAME),
    USER: getEnv(process.env.DB_USER),
    PASS: getEnv(process.env.DB_PASS),
  },
  saltRounds: 10,
};
