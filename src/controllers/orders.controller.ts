import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class ProductsController {
  constructor(private ordersService = new OrdersService()) { }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };
}

export default ProductsController;