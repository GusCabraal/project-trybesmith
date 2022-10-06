import connection from '../models/connection';
import { OrderModel } from '../models';
import { IOrder } from '../interfaces';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
