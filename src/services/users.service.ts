import connection from '../models/connection';
import { UserModel } from '../models';
import { IUser } from '../interfaces';

export default class UsersService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: IUser): Promise<number> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}
