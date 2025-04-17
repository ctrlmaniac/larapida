import { generateToken } from '@larapida/server-helpers';
import { Request, Response } from 'express';
import { getUserByEmailWithPassword } from './helpers/getUserByEmailWithPassword';
import { verifyPassword } from './helpers/verifyPassword';
import { prisma } from '../../../prisma/prisma-client';

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await getUserByEmailWithPassword(email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken({ id: user.id, email: user.email });

    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  } finally {
    await prisma.$disconnect();
  }
}
