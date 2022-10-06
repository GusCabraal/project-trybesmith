import { Request, Response } from 'express';
import { UserService } from '../services';
import { IUser } from '../interfaces';
import tokenGenerate from '../utils/tokenGenerate';

class UsersController {
  constructor(private userService = new UserService()) { }

  create = async (req: Request<unknown, unknown, IUser>, res: Response) => {
    await this.userService.create(req.body);
    const token = tokenGenerate(req.body);
    res.status(201).json({ token });
  };
}

export default UsersController;