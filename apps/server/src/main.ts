import express, { type Application } from 'express';
import appConfig from './config';

const app: Application = express();

app.listen(appConfig.PORT, () => {
  console.log('App listening on port ' + appConfig.PORT);
});
