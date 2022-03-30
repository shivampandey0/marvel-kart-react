import { createContext, useContext, useReducer } from "react";
import { userStateReducer, initialUserState } from "../reducers";
import { ACTION_TYPE } from "../utils";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userState, dispatchUserState] = useReducer(userStateReducer, {
    token: localStorage.getItem("token"),
    userData: JSON.parse(localStorage.getItem("userData")) ?? {
      ...initialUserState.userData,
    },
  });

  const logoutUser = () => {
    dispatchUserState({ type: ACTION_TYPE.CLEAR });
  };

  const inWishList = (id) => {
    const list = userState.userData?.wishlist;
    return list.find((item) => item._id === id);
  };

  const inCart = (id) => {
    const list = userState.userData?.cart;
    return list.find((item) => item._id === id);
  };

  return (
    <AuthContext.Provider
      value={{
        userState,
        logoutUser,
        inWishList,
        inCart,
        dispatchUserState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
