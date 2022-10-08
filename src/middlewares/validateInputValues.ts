import { Request, Response, NextFunction } from 'express';
import { newLogin, newProduct, newUser, updateProduct } from './schemas';

const ANY_REQUIRED = 'any.required';

const validateLogin = async (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;
  const { error } = newLogin.validate({ username, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const validateNewProduct = async (req:Request, res:Response, next:NextFunction) => {
  const { name, amount } = req.body;
  const { error } = newProduct.validate({ name, amount });
  if (error) {
    const status = error.details[0].type === ANY_REQUIRED ? 400 : 422;
    return res.status(status).json({ message: error.message });
  }
  
  next();
};

const validateNewUser = async (req:Request, res:Response, next:NextFunction) => {
  const { username, level, classe, password } = req.body;
  const { error } = newUser.validate({ username, level, classe, password });
  if (error) {
    const status = error.details[0].type === ANY_REQUIRED ? 400 : 422;
    return res.status(status).json({ message: error.message });
  }
  
  next();
};

const validateUpdateProduct = async (req:Request, res:Response, next:NextFunction) => {
  const { error } = updateProduct.validate(req.body);
  if (error) {
    const status = error.details[0].type === ANY_REQUIRED ? 400 : 422;
    return res.status(status).json({ message: error.message });
  }
  
  next();
};

export {
  validateLogin,
  validateNewProduct,
  validateNewUser,
  validateUpdateProduct,
};