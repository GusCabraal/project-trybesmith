import express from 'express';
import { UsersRoutes, ProductsRoutes, OrdersRoutes, LoginRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);
app.use('/login', LoginRoutes);

export default app;
