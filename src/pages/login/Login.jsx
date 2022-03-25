import { AuthLeftContainer, Logo, Input, FormError } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "../../css/auth.css";
import { useState, useEffect } from "react";
import { useAxios } from "../../hooks";
import { useAuth } from "../../context";
import { ACTION_TYPE } from "../../utils";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { response, loading, error, setError, sendRequest } = useAxios();
  const { dispatchUserState } = useAuth();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler();
  };

  const testLoginHandler = () => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };

  const loginHandler = () => {
    const config = {
      method: "post",
      url: "auth/login",
      data: {
        email,
        password,
      },
    };
    sendRequest(config);
  };

  useEffect(() => {
    if (response) {
      if (response.encodedToken) {
        dispatchUserState({
          type: ACTION_TYPE.INITIAL_STATE,
          payload: response,
        });
        navigate("/");
      } else {
        setError("Invalid");
      }
    }
  }, [response]);

  return (
    <main className="full-container flex-row">
      <AuthLeftContainer />
      <section className="right-container">
        <div className="form-container">
          <Logo />
          <form className="px-2 py-2" onSubmit={submitHandler}>
            <Input
              label={"Email"}
              required={true}
              value={email}
              type={"email"}
              placeholder={"Email"}
              changeHandler={(e) => setEmail(e.target.value)}
            />

            <Input
              label={"Passwod"}
              required={true}
              type={"password"}
              value={password}
              placeholder={"********"}
              changeHandler={(e) => setPassword(e.target.value)}
            />
            {error && <FormError message={"Invalid Email or Password"} />}

            <button className="btn btn-primary btn-full my-4" type="submit">
              {loading && <i className="fas fa-circle-notch fa-spin"></i>}{" "}
              <h4 className="fw-bold">Sign in</h4>
            </button>
            <button
              className="btn btn-outline btn-full my-4"
              type="button"
              onClick={testLoginHandler}
            >
              <h4 className="fw-bold">Fill with test-credentials</h4>
            </button>
            <p className="fw-bold py-4">
              Need an account?
              <Link to={"/register"} className="primary-link">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
