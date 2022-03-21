import { AuthLeftContainer, Input, Logo } from "../../components";
import { Link } from "react-router-dom";
import "../../css/auth.css";

export const Register = () => {
  return (
    <main className="full-container flex-row">
      <AuthLeftContainer />

      <section className="right-container">
        <div className="form-container">
          <Logo />

          <form className="px-2 py-2" action="#">
            <div className="input-row">
              <Input
                label={"First Name"}
                required={true}
                type={"text"}
                autoComplete={"given-name"}
                placeholder={"First Name"}
              />

              <Input
                label={"Last Name"}
                required={true}
                type={"text"}
                autoComplete={"family-name"}
                placeholder={"Last Name"}
              />
            </div>

            <div className="input-row">
              <Input
                label={"Email"}
                required={true}
                type={"email"}
                placeholder={"Email"}
              />

              <Input
                label={"Phone"}
                type={"text"}
                placeholder={"+91 1234 567 890"}
                pattern={"^(+91)?s?[1-9][0-9]{9}$"}
              />
            </div>

            <div className="input-row">
              <Input
                label={"Password"}
                required={true}
                type={"password"}
                placeholder={"********"}
              />
              <Input
                label={"Confirm Password"}
                required={true}
                type={"password"}
                placeholder={"********"}
              />
            </div>

            <div className="flex-row align-cntr input-group">
              <input type="checkbox" id="terms" />
              <label className="required" htmlFor="terms">
                I agree to the
                <a className="primary-link" href="#">
                  {`Terms & Conditions`}
                </a>
              </label>
            </div>

            <button className="btn btn-primary btn-full my-4" type="submit">
              Create Account
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
