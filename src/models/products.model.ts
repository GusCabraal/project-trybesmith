import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct, IUpdateOrder } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection
      .execute<(IProduct[] & RowDataPacket[])>('SELECT * FROM Trybesmith.Products');
    return rows;
  }

  async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount ) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  async updateOrder({ orderId, productId }: IUpdateOrder): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      `UPDATE Trybesmith.Products
        SET orderId = ?
        WHERE id = ?`,
      [orderId, productId],
    );
  }
}