import { generateToken } from '@larapida/server-helpers';
import { NextFunction, Request, Response } from 'express';
import { getUserByEmailWithPassword, verifyPassword } from './services';

export async function loginController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body) {
    res.status(400).json({ message: 'Email and password are required' });
    next(new Error('Email and password are required'));
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await getUserByEmailWithPassword(email);

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      next(new Error('User not found'));
    } else {
      const isPasswordValid = verifyPassword(password, user.password);

      if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid credentials' });
        next(new Error('Invalid credentials'));
      } else {
        const token = generateToken({ id: user.id, email: user.email });

        res.json({ message: 'Login successful', token });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Failed to login' });
  }
}
