import 'reflect-metadata';
import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import { constants } from '@larapida/server-config';
import { join } from 'path';
import { reactRouterServerLoader } from '@larapida/server-helpers';
import { appDataSource } from './app-data-source';

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

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

app.listen(constants.PORT, () => {
  console.log(`App listening at http://localhost:${constants.PORT}`);
});
