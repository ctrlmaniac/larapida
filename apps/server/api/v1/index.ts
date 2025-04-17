import { Router } from 'express';
import authRouter from './auth/routes';

export const apiv1Router = Router({ mergeParams: true });

apiv1Router.use('/auth', authRouter);
