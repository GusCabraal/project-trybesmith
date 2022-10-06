import express from 'express';
import ProductsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);

app.get('/', (_req, res) => res.send('Teste'));

export default app;
