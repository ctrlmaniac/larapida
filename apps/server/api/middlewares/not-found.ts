import { NextFunction, Request, Response } from 'express';

export function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = new Error('Resource not found');
  res.status(404).json({ message: 'Resource not found' });
  next(error);
}
