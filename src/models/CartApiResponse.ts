import { Cart } from "./Cart";

export type CartApiResponse = {
  data: {
    cart: Cart;
  };
  statusCode: number;
  message: string;
};
