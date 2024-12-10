//global.__basedir = __dirname;
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnector from './config/db.js';
import apiRouter from './router/index.js';
import config from './config/config.js';
import { errorHandler } from './utils/index.js';
import configureExpress from './config/express.js';

dotenv.config(); // Load environment variables

dbConnector()
  .then(() => {
    const app = express();

    // Apply express configuration
    configureExpress(app);

    // Enable CORS
    app.use(cors({
      origin: config.origin,
      credentials: true
    }));

    // API Routes
    app.use('/api', apiRouter);

    // Test Route (if needed for specific testing purposes)
    app.use('/test', apiRouter); // Using the same router for '/test'

    // Global Error Handler
    app.use(errorHandler);

    // Start the Server
    app.listen(config.port, () =>
      console.log(`Listening on port ${config.port}!`)
    );
  })
  .catch(console.error);
