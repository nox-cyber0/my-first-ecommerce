import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
// import Products from "../Pages/Products";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user && !auth.pwd) {
    return <Navigate to="/sign-in" state={{ path: location.pathname }} />
  } else {
    return children;
  }

  // return (
  //   auth.user && auth.pwd ?
  //   <Navigate to="/sign-in" state={{ path: location.pathname }} /> :
  //   children
  // )
}

export default RequireAuth;