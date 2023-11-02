const products_api = import.meta.env.DEV
  ? "http://localhost:3000/dev"
  : "https://u0sl31di08.execute-api.eu-north-1.amazonaws.com/dev";

const API_PATHS = {
  product: products_api,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://jyt7nq50yi.execute-api.eu-north-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
