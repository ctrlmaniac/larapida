import { User } from '../../../../prisma/prisma';
import { prisma } from '../../../../prisma/prisma-client';

export async function getUserByEmailWithPassword(
  email: string
): Promise<User> | null {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error('Error retrieving user by email:', error);
    return null;
  }
}
