import connection from '../models/connection';
import { ProductModel } from '../models';
import { IProduct } from '../interfaces';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  async create(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}
