import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './common/middleware/error.middleware';
import { notFoundHandler } from './common/middleware/notFound.middleware';
import { apiRoutes } from './routes';
import { config } from './config';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors(config.cors));

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export { app };