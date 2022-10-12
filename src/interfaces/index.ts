import { Request } from 'express';

interface IOrder {
  id?: number;
  userId?: number;
}

interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password?: string;
}

interface ILogin {
  id?: number;
  username: string;
  password?: string;
}

interface IReturnServiceLogin {
  status:number;
  token?: string;
  error?: unknown
}

interface IUpdateOrder {
  orderId: number;
  productId: number;
}

interface IError extends Error {
  status: number;
}

interface IReqLogin extends Request{
  userId?: number | undefined;
}

export {
  IOrder,
  IProduct,
  IUser,
  ILogin,
  IReturnServiceLogin,
  IReqLogin,
  IUpdateOrder,
  IError,
};