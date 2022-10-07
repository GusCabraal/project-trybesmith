import { Request, Response } from 'express';
import { IReqLogin } from '../interfaces';
import { OrderService } from '../services';

class ProductsController {
  constructor(private ordersService = new OrderService()) { }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };

  create = async (req: IReqLogin & Request, res: Response) => {
    const { userId } = req;
    const { productsIds } = req.body;
    await this.ordersService.create(userId, productsIds);
    res.status(201).json({ userId, productsIds });
  };
}

export default ProductsController;