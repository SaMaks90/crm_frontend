import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider";
import { Header } from "../components";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
