import { createContext, useState } from "react";

// 1
export const AuthContext = createContext();

// 2A
export function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({
    isAuth: false,
    token: null,
  });

  const login = (token) => {
    setUserData({
      isAuth: true,
      token: token,
    });
  };

  const logout = () => {
    setUserData({
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}