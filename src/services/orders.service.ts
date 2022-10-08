import connection from '../models/connection';
import { OrderModel, ProductModel } from '../models';
import { IOrder } from '../interfaces';

export default class OrderService {
  model: OrderModel;

  productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  async create(userId: number | undefined, productsIds: number[]) {
    const orderId = await this.model.create(userId);
    const updateProducts = productsIds.map(async (productId) => {
      await this.productModel.updateOrder({ orderId, productId });
    });
    Promise.all(updateProducts);
  }
}
