import express, { NextFunction, Request, Response } from 'express';
import { IError } from './interfaces';
import { UsersRoutes, ProductsRoutes, OrdersRoutes, LoginRoutes } from './routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);
app.use('/login', LoginRoutes);

app.use((error:IError, _req:Request, res:Response, _next: NextFunction) => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
});

export default app;
