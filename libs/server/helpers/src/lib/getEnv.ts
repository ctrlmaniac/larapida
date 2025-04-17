export function getEnv(env: string): string {
  if (process.env[env] === undefined || process.env[env] === null) {
    console.error(`Environment variable ${env} is not set.`);
    console.error(`Please set the ${env} environment variable.`);
    process.kill(process.pid, 'SIGTERM');
  }

  return env;
}
