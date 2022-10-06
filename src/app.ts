import express from 'express';
import { UsersRoutes, ProductsRoutes, OrdersRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);
// app.use('/login', LoginRoutes);

app.get('/', (_req, res) => res.send('Teste'));

export default app;
