import { useAuth } from "../../provider";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handlerLogout = () => {
    setToken(null);
    navigate("/login", { replace: true });
  };

  return <button onClick={handlerLogout}>Sign Out</button>;
};

export { SignOut };
