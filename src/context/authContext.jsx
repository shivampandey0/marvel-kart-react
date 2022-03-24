import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token") });

  const logoutUser = () => {
    setAuth();
    localStorage.removeItem("token");
  };

  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
