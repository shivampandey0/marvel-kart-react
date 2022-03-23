import {
  AuthLeftContainer,
  Input,
  Logo,
  FormError,
  FilterInput,
} from "../../components";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { useState, useEffect } from "react";
import { useAxios, useForm } from "../../hooks";
import { ACTION_TYPE } from "../../utils";

export const Register = () => {
  const [terms, setTerms] = useState(false);
  const { response, loading, error, sendRequest } = useAxios();
  const { formState, formDispatch, errorState, resetErrors, validateForm } =
    useForm();

  const { firstName, lastName, email, password, confirmPassword } = formState;

  const submitHandler = (e) => {
    e.preventDefault();
    resetErrors();
    if (validateForm()) {
      signUpHandler();
    }
  };

  const signUpHandler = () => {
    const config = {
      method: "post",
      url: "auth/signup",
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    };
    sendRequest(config);
  };

  useEffect(() => {
    console.log(response);
  }, [response, error]);

  return (
    <main className="full-container flex-row">
      <AuthLeftContainer />
      <section className="right-container">
        <div className="form-container">
          <Logo />
          <form className="px-2 py-2" onSubmit={submitHandler}>
            <div className="input-row">
              <Input
                label={"First Name"}
                required={true}
                type={"text"}
                value={firstName}
                autoComplete={"given-name"}
                placeholder={"First Name"}
                changeHandler={(e) =>
                  formDispatch({
                    type: ACTION_TYPE.FIRST_NAME,
                    payload: e.target.value,
                  })
                }
              />
              <Input
                label={"Last Name"}
                required={true}
                type={"text"}
                autoComplete={"family-name"}
                placeholder={"Last Name"}
                value={lastName}
                changeHandler={(e) =>
                  formDispatch({
                    type: ACTION_TYPE.LAST_NAME,
                    payload: e.target.value,
                  })
                }
              />
            </div>
            {errorState.firstNameError ||
              (errorState.lastNameError && (
                <div className="input-row">
                  <FormError message={errorState.firstNameError} />
                  <FormError message={errorState.lastNameError} />
                </div>
              ))}

            <div className="input-row">
              <Input
                type={"email"}
                label={"Email"}
                required={true}
                value={email}
                placeholder={"Email"}
                changeHandler={(e) =>
                  formDispatch({
                    type: ACTION_TYPE.EMAIL,
                    payload: e.target.value,
                  })
                }
              />
            </div>
            {errorState.emailError && (
              <FormError message={errorState.emailError} />
            )}

            <Input
              label={"Password"}
              required={true}
              value={password}
              type={"password"}
              placeholder={"********"}
              changeHandler={(e) =>
                formDispatch({
                  type: ACTION_TYPE.PASSWORD,
                  payload: e.target.value,
                })
              }
            />
            {errorState.passwordError && (
              <FormError message={errorState.passwordError} />
            )}

            <Input
              label={"Confirm Password"}
              required={true}
              type={"password"}
              placeholder={"********"}
              value={confirmPassword}
              changeHandler={(e) =>
                formDispatch({
                  type: ACTION_TYPE.CONFIRM_PASSWORD,
                  payload: e.target.value,
                })
              }
            />
            {errorState.confirmPasswordError && (
              <FormError message={errorState.confirmPasswordError} />
            )}

            <div className="flex-row align-cntr input-group">
              <FilterInput
                title={"I agree to the"}
                inputType="checkbox"
                checked={terms}
                changeHandler={(e) => setTerms(e.target.checked)}
              />
              <a className="primary-link" href="#">
                {`Terms & Conditions`}
              </a>
            </div>

            {error && <FormError message="Something Went Wrong" />}
            <button
              disabled={!terms}
              className="btn btn-primary btn-full my-4"
              type="submit"
            >
              {loading && <i className="fas fa-circle-notch fa-spin"></i>}{" "}
              <h4 className="fw-bold">Create Account</h4>
            </button>

            <p className="fw-bold">
              Already have an account?
              <Link to="/login" className="primary-link">
                {" Log in"}
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
