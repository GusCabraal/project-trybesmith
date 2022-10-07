import { Request, Response, NextFunction } from 'express';
import { newProduct } from './schemas';

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
const validateNewProduct = async (req:Request, res:Response, next:NextFunction) => {
  const { name, amount } = req.body;
  const { error } = newProduct.validate({ name, amount });
  if (error) {
    if (error.details[0].type === 'any.required') {
      const { message } = error;
      return res.status(400).json({ message });
    }
    const { message } = error;
    return res.status(422).json({ message });
  }
  
  next();
};
export {
  validateLogin,
  validateNewProduct,
};