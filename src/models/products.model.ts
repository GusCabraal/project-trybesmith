// ./models/book.model.ts

import { Pool, RowDataPacket } from 'mysql2/promise';
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
}