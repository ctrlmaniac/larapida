export const constants = {
  PORT: Number.parseInt(process.env.PORT ?? '3000'),
  DB: {
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
  },
  saltRounds: 10,
};
