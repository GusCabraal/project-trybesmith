import { Request, Response, NextFunction } from 'express';
import { newProduct, newUser, updateProduct } from './schemas';

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
const ANY_REQUIRED = 'any.required';

const validateNewProduct = async (req:Request, res:Response, next:NextFunction) => {
  const { name, amount } = req.body;
  const { error } = newProduct.validate({ name, amount });
  if (error) {
    if (error.details[0].type === ANY_REQUIRED) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  
  next();
};
const validateNewUser = async (req:Request, res:Response, next:NextFunction) => {
  const { username, level, classe, password } = req.body;
  const { error } = newUser.validate({ username, level, classe, password });
  if (error) {
    if (error.details[0].type === ANY_REQUIRED) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  
  next();
};

const validateUpdateProduct = async (req:Request, res:Response, next:NextFunction) => {
  const { error } = updateProduct.validate(req.body);
  if (error) {
    if (error.details[0].type === ANY_REQUIRED) {
      return res.status(400).json({ message: error.message });
    }
    console.log(error);
    if (error.details[0].type === 'array.includesRequiredUnknowns') {
      return res.status(422).json({ message: '"productsIds" must include only numbers' });
    }
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  next();
};

export {
  validateLogin,
  validateNewProduct,
  validateNewUser,
  validateUpdateProduct,
};