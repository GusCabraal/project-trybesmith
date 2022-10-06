import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

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
}