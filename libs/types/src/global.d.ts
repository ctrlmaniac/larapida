/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      SU_EMAIL: string;
      SU_PASS: string;
      SU_FIRSTNAME: string;
      SU_LASTNAME: string;
      DATABASE_URL: string;
      SECRETKEY: string;
      DOMAIN_NAME: string;
    }
  }
}

export {};
