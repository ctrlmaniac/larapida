import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { join } from 'path';
import { startServer } from '@larapida/server-helpers';
import { AppsDirPath } from './types';
import { routes } from './routes';

const appsDirPath: AppsDirPath = {
  www: join(__dirname, 'www'),
  admin: join(__dirname, 'admin'),
};

const app: Application = express();

app.disable('x-powered-by');

/** MIDDLEWARES */
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());

/** ROUTES & ROUTERS */
routes(app, appsDirPath);

/** Start application */
startServer(app);
