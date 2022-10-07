import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password ) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return insertId;
  }

  async getByNameAndPassword(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;
    const [rows] = await this.connection
      .execute<(
    IUser[] & RowDataPacket[])>(`
      SELECT * FROM Trybesmith.Users
      WHERE username = ? AND password = ?;`,
      [username, password],
      );
    return rows;
  }

  async getUserByUsername(username: string): Promise<IUser> {
    const [[rows]] = await this.connection
      .execute<(
    IUser[] & RowDataPacket[])>(`
      SELECT * FROM Trybesmith.Users
      WHERE username = ?;`,
      [username],
      );
    return rows;
  }
}