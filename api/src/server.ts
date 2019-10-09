import cookieParser from 'cookie-parser';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';

import BaseRouter from './routes';

const app = express();

/**
 * Disable CORS when in development
 */
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
}

/**
 * Add middleware/settings/routes
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', BaseRouter);

/**
 * Serve UI files
 */
if (process.env.UI_DIR) {
    const staticDir = path.join(__dirname, process.env.UI_DIR);
    app.use(express.static(staticDir));
    app.get('*', (req: Request, res: Response) => {
        res.sendFile('index.html', {root: staticDir});
    });
}

export default app;
