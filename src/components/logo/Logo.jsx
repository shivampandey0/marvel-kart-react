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
        <div class="txt-small">
          © 2022
          <div class={styles.nav_logo}>
            <span class="txt-sm">MARVEL</span>
            <span class="txt-sm">KART</span>
          </div>
        </div>
      )}
    </>
  );
};
