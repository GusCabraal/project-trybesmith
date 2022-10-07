import { Request, Response } from 'express';
import { UserService } from '../services';
import { ILogin, IUser } from '../interfaces';
import tokenGenerate from '../utils/tokenGenerate';

class UsersController {
  constructor(private userService = new UserService()) { }

  create = async (req: Request<unknown, unknown, IUser>, res: Response) => {
    await this.userService.create(req.body);
    const token = tokenGenerate(req.body);
    res.status(201).json({ token });
  };

  login = async (req: Request<unknown, unknown, ILogin>, res: Response) => {
    const { error, status, token } = await this.userService.getByNameAndPassword(req.body);
    if (error) {
      return res.status(status).json(error);
    }
    res.status(200).json({ token });
  };
}

export default UsersController;