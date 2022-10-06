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
export {
  IOrder,
  IProduct,
  IUser,
};