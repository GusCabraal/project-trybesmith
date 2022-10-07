import Joi from 'joi';

const newProduct = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const newUser = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});
const productId = Joi.number().required();
const updateProduct = Joi.object({
  productsIds: Joi.array().items(productId).min(1).required(),
});
export {
  newProduct,
  newUser,
  updateProduct,
};