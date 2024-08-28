import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cookies, setCookies, removeCookie] = useCookies(["token", "user"]);
  const setToken = (newToken) => {
    if (newToken) {
      setCookies("token", newToken, {
        expires: new Date(new Date().getTime() + 7200000),
      });
    } else {
      removeCookie("token");
      removeCookie("user");
    }
  };

  const setUser = (user) => {
    setCookies("user", user);
  };

  const contextValue = useMemo(
    () => ({ token: cookies.token, user: cookies.user, setToken, setUser }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
