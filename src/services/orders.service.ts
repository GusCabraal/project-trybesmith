import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
