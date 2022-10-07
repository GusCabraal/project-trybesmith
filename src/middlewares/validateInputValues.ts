import { Request, Response, NextFunction } from 'express';

const validateLogin = async (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    const message = '"username" is required';
    return res.status(400).json({ message });
  }
  if (!password) {
    const message = '"password" is required';
    return res.status(400).json({ message });
  }
  next();
};
export default validateLogin;