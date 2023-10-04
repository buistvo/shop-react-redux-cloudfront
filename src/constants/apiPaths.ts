const API_PATH = import.meta.env.DEV
  ? "http://localhost:3000/dev"
  : "https://u0sl31di08.execute-api.eu-north-1.amazonaws.com/dev";

export default API_PATH;
