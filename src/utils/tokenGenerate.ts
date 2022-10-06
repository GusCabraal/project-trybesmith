import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/user.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || '';

const tokenGenerate = (user: IUser) => {
  const payload: IUser = {
    username: user.username,
    classe: user.classe,
    level: user.level,
  };

  const token = jwt.sign(payload, secret);

  return token;
};

export default tokenGenerate;