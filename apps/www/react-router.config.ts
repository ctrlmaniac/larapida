import type { Config } from '@react-router/dev/config';
import { join } from 'path';

export default {
  ssr: true,
  buildDirectory: join(__dirname, '../../apps/server/www'),
} satisfies Config;
