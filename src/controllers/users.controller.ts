import { Request, Response } from 'express';
import UserService from '../services/users.service';
import IUser from '../interfaces/user.interface';

class UsersController {
  constructor(private userService = new UserService()) { }

  create = async (req: Request<unknown, unknown, IUser>, res: Response) => {
    const newUser = await this.userService.create(req.body);
    res.status(201).json(newUser);
  };
}

export default UsersController;