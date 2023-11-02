import PropTypes from "prop-types"; // Import PropTypes
import { useLocation } from "react-router-dom";
export type Error = {
  message: string;
};

const ErrorPage = () => {
  const { state } = useLocation();
  const error = (state as any).error;
  return (
    <div>
      <h1> Oops! Something went wrong.</h1>
      <p>{error?.message}</p>
    </div>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object, // Define the PropTypes for the 'error' prop
};

export default ErrorPage;
