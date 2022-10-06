import express from 'express';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);

app.get('/', (_req, res) => res.send('Teste'));

export default app;
