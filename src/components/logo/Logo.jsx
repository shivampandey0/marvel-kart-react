import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = ({ variant }) => {
  return (
    <>
      {variant === "header" ? (
        <Link to="/" className={styles.nav_logo} role="img">
          <span>MARVEL</span>
          <span>
            KART
            <i className="fa-solid fa-cart-shopping" />
          </span>
        </Link>
      ) : (
        <div className="txt-small">
          © 2022{"  "}
          <div className={styles.nav_logo}>
            <span className="txt-sm">MARVEL</span>
            <span className="txt-sm">KART</span>
          </div>
        </div>
      )}
    </>
  );
};
