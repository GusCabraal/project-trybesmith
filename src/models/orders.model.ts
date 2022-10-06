import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection
      .execute<(IOrder[] & RowDataPacket[])>(
      `SELECT O.id, O.userId, json_arrayagg(P.id) AS productsIds
      FROM Trybesmith.Orders as O
      JOIN Trybesmith.Products as P
      ON  P.orderId = O.id
      GROUP BY O.id;`);
    return rows;
  }
}