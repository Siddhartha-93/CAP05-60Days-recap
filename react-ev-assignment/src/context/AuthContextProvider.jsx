import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({
    isAuth: false,
    token: null,
    email: null
  });

  const login = (token, email) => {
    setUserData({
      isAuth: true,
      token: token,
      email: email
    });
  };

  const logout = () => {
    setUserData({
      isAuth: false,
      token: null,
      email: null
    });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}