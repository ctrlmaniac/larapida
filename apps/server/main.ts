import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { join } from 'path';
import { reactRouterServerLoader, startServer } from '@larapida/server-helpers';

const app: Application = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());

/** WWW hydrated client and static files */
app.use('/assets', express.static(join(__dirname, 'www/client/assets')));
app.use('/static', express.static(join(__dirname, 'www/client/static')));
app.use(express.static(join(__dirname, 'www/client')));

/** WWW ssr application loader */
const wwwModulePath = join(__dirname, 'www/server/index.js');
reactRouterServerLoader(wwwModulePath, app);

/** Start application */
startServer(app);
