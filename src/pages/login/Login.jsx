import { AuthLeftContainer, Logo, Input, FormError } from "../../components";
import { Link } from "react-router-dom";
import "../../css/auth.css";
import { useState, useEffect } from "react";
import { useAxios } from "../../hooks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { response, loading, error, sendRequest } = useAxios();

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
      localStorage.setItem("token", response.encodedToken);
    }
    console.log(response);
    console.log(error);
  }, [response, error]);

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

            {/* <div className="flex-row align-cntr justify-sb">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" /> Remember Me
              </label>

              <a className="txt-grey txt-sm my-4" href="#">
                Forgot Password?
              </a>
            </div> */}
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
              {loading && <i className="fas fa-circle-notch fa-spin"></i>}{" "}
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
