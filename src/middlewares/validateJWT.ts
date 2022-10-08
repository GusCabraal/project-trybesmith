import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { IReqLogin } from '../interfaces';

require('dotenv/config');

const secret = process.env.JWT_SECRET || '';

const validateJWT = async (req:IReqLogin, res:Response, next:NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { id } = jwt.verify(token, secret) as JwtPayload;
    req.userId = id;

    next();
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = 'Invalid token';
    return res.status(401).json({ message });
  }
};

export default validateJWT;