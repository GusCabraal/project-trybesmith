// ./services/books.service.ts

import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import IProduct from '../interfaces/product.interface';

class ProductService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;