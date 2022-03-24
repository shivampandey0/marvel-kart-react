import { ACTION_TYPE } from "../utils";

export const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const initialErrorStates = {
  emailError: "",
  lastNameError: "",
  passwordError: "",
  confirmPasswordError: "",
  firstNameError: "",
};

export const formReducer = (state, action) => {
  
  switch (action.type) {
    case ACTION_TYPE.FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_TYPE.LAST_NAME:
      return { ...state, lastName: action.payload };
    case ACTION_TYPE.EMAIL:
      return { ...state, email: action.payload };
    case ACTION_TYPE.PASSWORD:
      return { ...state, password: action.payload };
    case ACTION_TYPE.CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

export const errorReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.FIRST_NAME_ERROR:
      return { ...state, firstNameError: action.payload };
    case ACTION_TYPE.LAST_NAME_ERROR:
      return { ...state, lastNameError: action.payload };
    case ACTION_TYPE.EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case ACTION_TYPE.PASSWORD_ERROR:
      return { ...state, passwordError: action.payload };
    case ACTION_TYPE.CONFIRM_PASSWORD_ERROR:
      return { ...state, confirmPasswordError: action.payload };
    case ACTION_TYPE.CLEAR:
      return initialErrorStates;
    default:
      return state;
  }
};
