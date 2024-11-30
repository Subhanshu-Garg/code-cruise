import { app } from './app';
import { config } from './config';
import { logger } from './common/utils/logger';

const startServer = () => {
  try {
    app.listen(config.port, () => {
      logger.info(`Server is running on port ${config.port}`);
      logger.info(`Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    logger.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();