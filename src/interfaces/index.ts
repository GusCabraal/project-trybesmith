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

export {
  IOrder,
  IProduct,
  IUser,
  ILogin,
  IReturnServiceLogin,
};