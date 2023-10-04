import { rest } from "msw";
import API_PATH from "~/constants/apiPaths";
import { orders, cart } from "~/mocks/data";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";

export const handlers = [
  rest.get(`${API_PATH}/profile/cart`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<CartItem[]>(cart));
  }),
  rest.put(`${API_PATH}/profile/cart`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATH}/order`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(), ctx.json<Order[]>(orders));
  }),
  rest.put(`${API_PATH}/order`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${API_PATH}/order/:id`, (req, res, ctx) => {
    const order = orders.find((p) => p.id === req.params.id);
    if (!order) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.delay(), ctx.json(order));
  }),
  rest.delete(`${API_PATH}/order/:id`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.put(`${API_PATH}/order/:id/status`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
