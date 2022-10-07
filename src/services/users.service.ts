import connection from '../models/connection';
import { UserModel } from '../models';
import { ILogin, IReturnServiceLogin, IUser } from '../interfaces';
import tokenGenerate from '../utils/tokenGenerate';

export default class UsersService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: IUser): Promise<number> {
    const newUser = await this.model.create(user);
    return newUser;
  }

  async getByNameAndPassword(user:ILogin): Promise<IReturnServiceLogin> {
    const users = await this.model.getByNameAndPassword(user);
    if (users.length !== 0) {
      const token = tokenGenerate(users[0]);
      return { status: 200, token, error: null };
    }
    const message = 'Username or password invalid';
    return { status: 401, error: { message } };
  }

  async getUserByUsername(username:string): Promise<IUser> {
    const user = await this.model.getUserByUsername(username);
    return user;
  }
}
