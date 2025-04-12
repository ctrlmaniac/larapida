import express, { type Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import appConfig from './config';
import { join } from 'path';
import ssrAppLoader from './helpers/ssrAppLoader';

const app: Application = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('tiny'));

/** WWW hydrated client and static files */
app.use('/assets', express.static(join(__dirname, 'www/client/assets')));
app.use('/static', express.static(join(__dirname, 'www/client/static')));
app.use(express.static(join(__dirname, 'www/client')));

/** WWW ssr application loader */
const wwwModulePath = join(__dirname, 'www/server/index.js');
ssrAppLoader(wwwModulePath, app);

app.listen(appConfig.PORT, () => {
  console.log(`App listening at http://localhost:${appConfig.PORT}`);
});
