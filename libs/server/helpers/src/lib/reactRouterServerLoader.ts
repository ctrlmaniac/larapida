import { Application } from 'express';
import { createRequestHandler } from '@react-router/express';
import { ServerBuild } from 'react-router';

export async function reactRouterServerLoader(
  module: string,
  app: Application
) {
  const build: ServerBuild = await import(module);

  app.all(
    '/{*any}',
    createRequestHandler({
      mode: 'production',
      build: build,
    })
  );
}
