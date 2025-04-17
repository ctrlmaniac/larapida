import * as bcrypt from 'bcrypt';

export async function verifyPassword(
  providedPassword: string,
  hashedPassword?: string
): Promise<boolean> {
  if (!hashedPassword) {
    return false; // Or handle this case as appropriate for your application
  }
  try {
    const isMatch = await bcrypt.compare(providedPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    return false;
  }
}
