import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const secret = process.env.JWT_SECRET || '';

const tokenGenerate = (user: IUser) => {
  const payload: IUser = {
    id: user.id,
    username: user.username,
    classe: user.classe,
    level: user.level,
  };

  const token = jwt.sign(payload, secret);

  return token;
};

export default tokenGenerate;