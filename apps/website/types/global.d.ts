import { PrismaClient } from "@prisma/client";

interface LarapidaEnvs {
  SECRET_KEY: string;
  DATABASE_URL: string;
  SU_FNAME: string;
  SU_LNAME: string;
  SU_EMAIL: string;
  SU_PASSWORD:string;
}

declare global {
  // eslint-disable-next-line no-var
  var prismaClient: PrismaClient;

  namespace NodeJS {
    interface ProcessEnv extends LarapidaEnvs {
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {}
