import { Router } from 'express';
import { notFoundMiddleware } from './middlewares/not-found';
import { apiv1Router } from './v1';

const apiRouter = Router();

apiRouter.use('/v1', apiv1Router);
apiRouter.use(notFoundMiddleware);

export default apiRouter;
