import { AuthLeftContainer, Logo, Input } from "../../components";
import { Link } from "react-router-dom";
import "../../css/auth.css";
export const Login = () => {
  return (
    <main className="full-container flex-row">
      <AuthLeftContainer />
      <section className="right-container">
        <div className="form-container">
          <Logo />
          <form className="px-2 py-2" action="#">
            <Input
              label={"Email"}
              required={true}
              type={"email"}
              placeholder={"Email"}
            />

            <Input
              label={"Password"}
              required={true}
              type={"password"}
              placeholder={"********"}
            />

            <div className="flex-row align-cntr justify-sb">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" /> Remember Me
              </label>

              <a className="txt-grey txt-sm my-4" href="#">
                Forgot Password?
              </a>
            </div>

            <button className="btn btn-primary btn-full my-4" type="submit">
              Sign in
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
