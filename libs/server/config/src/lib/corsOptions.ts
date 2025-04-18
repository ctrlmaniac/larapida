import { CorsOptions } from 'cors';

const fulldomain = process.env.DOMAIN_NAME as string;
const domainArray = fulldomain.split('.');
const baseDomainRegex = `.${domainArray.slice(-2).join('\\.')}$`;

/**
 * List of allowed origins for CORS.
 * This includes the full domain and a regex for subdomains.
 */
export const allowedOrigins = [
  'http://' + fulldomain,
  'https://' + fulldomain,
  new RegExp(baseDomainRegex),
];

/**
 * Configuration options for Cross-Origin Resource Sharing (CORS).
 */
export const corsOptions: CorsOptions = {
  origin: (
    origin: string,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      allowedOrigins.some(
        (regex) => regex instanceof RegExp && regex.test(origin)
      )
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to handle cookies
  allowedHeaders: 'Content-Type, Authorization',
};
