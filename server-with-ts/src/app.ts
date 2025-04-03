import express, {NextFunction,Response,Request} from 'express';
import { errorHandler } from './business-logic/middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', (req:Request, res:Response, next:NextFunction) => {
    res.send('Welcome to my API!');
} );

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;