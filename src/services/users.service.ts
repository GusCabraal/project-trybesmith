import connection from '../models/connection';
import UsersModel from '../models/users.model';
import IUser from '../interfaces/user.interface';

class UserService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async create(user: IUser): Promise<number> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}

export default UserService;