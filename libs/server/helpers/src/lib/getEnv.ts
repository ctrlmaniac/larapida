export function getEnv(env: string): string {
  if (process.env[env] === undefined || process.env[env] === null) {
    process.exit(1);
  }

  return env;
}
