module.exports = {
  apps: [
    {
      cwd: './',
      name: 'larapida-website',
      script: 'dotenvx',
      args: 'run -- npx nx run server:serve',
      interpreter: 'none',
      watch: ['./apps', './libs'],
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
