import { createContext, useContext, useReducer } from "react";
import { userStateReducer, initialUserState } from "../reducers";
import { ACTION_TYPE } from "../utils";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userState, dispatchUserState] = useReducer(userStateReducer, {
    ...initialUserState,
    token: localStorage.getItem("token"),
  });

  const logoutUser = () => {
    dispatchUserState({ type: ACTION_TYPE.CLEAR });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ logoutUser, userState, dispatchUserState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
