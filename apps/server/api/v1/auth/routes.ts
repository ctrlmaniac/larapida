import { Router } from 'express';
import { loginController } from './controller.login';

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', loginController);

export default authRouter;
