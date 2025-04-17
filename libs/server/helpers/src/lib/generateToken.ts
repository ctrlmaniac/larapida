import { sign, SignOptions } from 'jsonwebtoken';
import { getEnv } from './getEnv';

interface TokenPayload {
  id: string;
  email: string;
}

export function generateToken(payload: TokenPayload, options?: SignOptions) {
  return sign(payload, getEnv('SECRETKEY'), {
    expiresIn: '24h',
    ...options,
  });
}
