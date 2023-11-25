const products_api = import.meta.env.DEV
  ? "http://localhost:3000/dev"
  : "https://u0sl31di08.execute-api.eu-north-1.amazonaws.com/dev";

const cart_api = import.meta.env.DEV
  ? "http://localhost:3003/dev/api"
  : "https://buistvo-cart-api-develop.eu-north-1.elasticbeanstalk.com/api";
const API_PATHS = {
  product: products_api,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://jyt7nq50yi.execute-api.eu-north-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: cart_api,
};

export default API_PATHS;
