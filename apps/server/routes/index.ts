import { Application } from 'express';
import { AppsDirPath } from '../types';
import subdomain from 'express-subdomain';
import { apiRouter } from '../api';
import { adminApp, wwwApp } from './apps';

export function routes(app: Application, appsDirPath: AppsDirPath) {
  /** API */
  app.use(subdomain('api', apiRouter));

  /** ADMIN */
  app.use(subdomain('admin', adminApp(appsDirPath.admin)));

  /** WWW (main domain routes) */
  wwwApp(app, appsDirPath.www);
}
