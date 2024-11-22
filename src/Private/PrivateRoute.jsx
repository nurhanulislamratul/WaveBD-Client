import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { userData, isLoading } = useUser();
  if (loading || isLoading) {
    return <p className="text-3xl text-center font-bold">Loading....</p>;
  }
  if (user && userData) {
    return children;
  }

  return <Navigate to={"/login"} state={location} replace />;
};

export default PrivateRoute;
