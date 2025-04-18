import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

/**
 * Configuration object for different API versions.
 */
interface ApiConfig {
  [version: string]: AxiosRequestConfig;
}

type ApiCommonConfig = Omit<AxiosRequestConfig, 'baseURL'>;

const commonApiConfig: ApiCommonConfig = {
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: (() => {
      const token = Cookies.get('token');
      return token ? `Bearer ${token}` : undefined;
    })(),
  },
};

/**
 * Defines the base URLs, timeouts, and headers for different API versions.
 *
 * @remarks
 * This object should be extended to include all supported API versions.
 * Ensure that any authorization tokens or other sensitive headers are managed securely.
 */
const apiConfig: ApiConfig = {
  v1: {
    ...commonApiConfig,
    baseURL: 'http://api.' + process.env.DOMAIN_NAME + '/v1',
  },
};

/**
 * Helper object providing pre-configured Axios instances for different API versions.
 *
 * @example
 * ```typescript
 * import { api } from '@larapida/client-helpers';
 *
 * // Make a GET request to /data using the v1 API
 * api.v1.get('/data')
 * .then(response => {
 * console.log(response.data);
 * })
 * .catch(error => {
 * console.error(error);
 * });
 *
 * // Make a POST request to /items using the v2 API
 * api.v2.post('/items', { name: 'Item Name' })
 * .then(response => {
 * console.log(response.data);
 * })
 * .catch(error => {
 * console.error(error);
 * });
 * ```
 *
 * @returns An object where each property is an AxiosInstance corresponding to an API version (e.g., `v1`, `v2`, etc.).
 */
export const api: { [version: string]: AxiosInstance } = {};

for (const version in apiConfig) {
  api[version] = axios.create(apiConfig[version]);
}
