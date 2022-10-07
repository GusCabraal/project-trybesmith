import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// import { IUser } from '../interfaces';
import { UserService } from '../services';
import { IReqLogin } from '../interfaces';

require('dotenv/config');

const secret = process.env.JWT_SECRET || '';
const userService = new UserService();

const validateJWT = async (req:IReqLogin & Request, res:Response, next:NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { username } = jwt.verify(token, secret) as JwtPayload;

    const user = await userService.getUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = user.id;

    next();
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = 'Invalid token';
    return res.status(401).json({ message });
  }
};

export default validateJWT;