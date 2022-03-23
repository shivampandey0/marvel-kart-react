import {
  errorReducer,
  formReducer,
  initialErrorStates,
  initialForm,
} from "../reducers";
import { useReducer } from "react";
import { ACTION_TYPE, emailRegex, nameRegex, passwordRegex } from "../utils";

export const useForm = () => {
  const [formState, formDispatch] = useReducer(formReducer, initialForm);
  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    initialErrorStates
  );

//   console.log(errorState);
//   console.log(formState);
  const validateForm = () => {
    let formValid = true;
    if (!nameRegex.test(formState.firstName)) {
      errorDispatch({
        type: ACTION_TYPE.FIRST_NAME_ERROR,
        payload: "Please Enter Valid First Name",
      });
      formValid = false;
    }
    if (!nameRegex.test(formState.lastName)) {
      errorDispatch({
        type: ACTION_TYPE.LAST_NAME_ERROR,
        payload: "Please Enter Valid Last Name",
      });
      formValid = false;
    }
    if (!emailRegex.test(formState.email)) {
      errorDispatch({
        type: ACTION_TYPE.EMAIL_ERROR,
        payload: "Please Enter Email",
      });
      formValid = false;
    }
    if (!passwordRegex.test(formState.password)) {
      errorDispatch({
        type: ACTION_TYPE.PASSWORD_ERROR,
        payload:
          "Password length should contain minimum 8 characters (at least one capital, small letter and number)",
      });
      formValid = false;
    }

    if (formState.password !== formState.confirmPassword) {
      errorDispatch({
        type: ACTION_TYPE.CONFIRM_PASSWORD_ERROR,
        payload: "Password does not match",
      });
      formValid = false;
    }
    return formValid;
  };

  const resetErrors = () => errorDispatch({ type: ACTION_TYPE.CLEAR });

  return { formState, formDispatch, errorState, resetErrors, validateForm };
};
