import type { Config } from '@react-router/dev/config';
import { join } from 'path';

export default {
  ssr: false,
  buildDirectory: join(__dirname, '../../apps/server/admin'),
} satisfies Config;
