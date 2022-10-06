import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import IProduct from '../interfaces/product.interface';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  create = async (req: Request<unknown, unknown, IProduct>, res: Response) => {
    const newProduct = await this.productService.create(req.body);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;