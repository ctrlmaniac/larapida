import { User } from '../../../prisma/prisma';
import { prisma } from '../../../prisma/prisma-client';
import * as bcrypt from 'bcrypt';

export async function getUserByEmailWithPassword(
  email: string
): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error('Error retrieving user by email:', error);

    if (error.code === 'P2025') {
      console.error('User not found');
      return null;
    }

    throw error;
  }
}

export function verifyPassword(
  providedPassword: string,
  hashedPassword: string
): boolean {
  return bcrypt.compareSync(providedPassword, hashedPassword);
}
