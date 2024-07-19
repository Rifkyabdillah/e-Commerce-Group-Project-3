export interface IOrder {
  total_price: number;
  email: string;
  phone: number;
  fullname: string;
  user_server_key: string;
  cart_id: number[];
}
