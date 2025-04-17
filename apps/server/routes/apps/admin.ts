import { join } from 'path';
import express, { Response, Router } from 'express';

export function adminApp(appDir: string): Router {
  const router = Router();

  router.use(
    express.static(join(appDir, 'client/assets'), {
      immutable: true,
      maxAge: '1y',
    })
  );

  router.use(
    express.static(join(appDir, 'client/static'), {
      immutable: true,
      maxAge: '1y',
    })
  );

  router.use(express.static(appDir, { maxAge: '1h' }));

  router.all('/{*any}', (_, res: Response) => {
    res.sendFile(join(appDir, 'client/index.html'));
  });

  return router;
}
