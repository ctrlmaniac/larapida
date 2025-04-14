import { Application } from 'express';
import { DataSource } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
import { constants } from '@larapida/server-config';

export async function startServer(app: Application, appDataSource: DataSource) {
  try {
    appDataSource.initialize();
    console.log('Data Source has been initialized!');

    console.log('Seeding database if needed...');
    await runSeeders(appDataSource);

    const server = app.listen(constants.PORT, () => {
      console.log(`App listening at http://localhost:${constants.PORT}`);
    });

    server.on('error', (error) => {
      console.error('Server error:', error);
      process.exit(1); // Exit with an error code
    });

    process.on('SIGINT', () => {
      // Handle graceful shutdown
      console.log('Received SIGINT. Closing server...');
      server.close(() => {
        console.log('Server closed.');
        process.exit(0);
      });
    });

    process.on('SIGTERM', () => {
      // Handle graceful shutdown
      console.log('Received SIGTERM. Closing server...');
      server.close(() => {
        console.log('Server closed.');
        process.exit(0);
      });
    });
  } catch (error) {
    console.error('Error during application startup:', error);
  }
}
