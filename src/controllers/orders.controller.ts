import { Request, Response } from 'express';
import { OrderService } from '../services';

class ProductsController {
  constructor(private ordersService = new OrderService()) { }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };
}

export default ProductsController;