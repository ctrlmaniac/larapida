import { type Application } from 'express';
import { createRequestHandler } from '@react-router/express';
import { ServerBuild } from 'react-router';

export default async function ssrAppLoader(module: string, app: Application) {
  const build: ServerBuild = await import(module);

  app.all(
    '/{*any}',
    createRequestHandler({
      mode: 'production',
      build: build,
    })
  );
}
