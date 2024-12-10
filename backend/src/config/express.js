import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { errorHandler } from '../utils/errHandler.js';

const cookieSecret = process.env.COOKIESECRET || 'SoftUni';

// Resolve __basedir equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (app) => {
    app.use(express.json());

    app.use(cookieParser(cookieSecret));

    app.use(express.static(path.resolve(__dirname, 'static')));

    app.use((err, req, res, next) => errorHandler(err, req, res, next));
};
