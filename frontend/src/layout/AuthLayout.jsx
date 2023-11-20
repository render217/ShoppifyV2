import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
}
