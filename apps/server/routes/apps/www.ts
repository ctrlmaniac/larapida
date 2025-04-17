import { reactRouterServerLoader } from '@larapida/server-helpers';
import express, { Application } from 'express';
import { join } from 'path';

export function wwwApp(app: Application, appDirPath: string): void {
  /** serving client-side files */
  app.use(
    '/assets',
    express.static(join(appDirPath, 'client/assets'), {
      immutable: true,
      maxAge: '1y',
    })
  );
  app.use(
    '/static',
    express.static(join(appDirPath, 'client/static'), {
      immutable: true,
      maxAge: '1y',
    })
  );
  app.use(express.static(join(appDirPath, 'client'), { maxAge: '1h' }));

  /** server-side client loader */
  reactRouterServerLoader(join(appDirPath, 'server/index.js'), app);
}
