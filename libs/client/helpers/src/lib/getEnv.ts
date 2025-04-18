export function getEnv(env: keyof ImportMetaEnv): string {
  const envs = import.meta.env;
  const envValue = envs[env];

  if (envValue === undefined) {
    throw new Error(`Environment variable ${env} is not defined`);
  }
  return envValue;
}
