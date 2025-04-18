import { join } from 'path';
import express, { Response, Router } from 'express';

export function adminApp(appDirPath: string): Router {
  const router = Router();

  router.use('/assets', express.static(join(appDirPath, 'client/assets')));

  router.use('/static', express.static(join(appDirPath, 'client/static')));

  router.use(express.static(appDirPath));

  router.all('/{*any}', (_, res: Response) => {
    res.sendFile(join(appDirPath, 'client/index.html'));
  });

  return router;
}
