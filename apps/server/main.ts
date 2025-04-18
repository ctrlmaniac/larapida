import { AppsDirPath } from './types';
import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import { join } from 'path';
import { startServer } from '@larapida/server-helpers';
import { routes } from './routes';
import { corsOptions } from '@larapida/server-config';

const appsDirPath: AppsDirPath = {
  www: join(__dirname, 'www'),
  admin: join(__dirname, 'admin'),
};

const app: Application = express();

app.disable('x-powered-by');

/** MIDDLEWARES */
app.use(compression());
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(express.json());

/** ROUTES & ROUTERS */
routes(app, appsDirPath);

/** Start application */
startServer(app);
