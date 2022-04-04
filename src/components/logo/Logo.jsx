import { Link } from "react-router-dom";
import "../../css/Logo.css";

export const Logo = ({ variant }) => {
  if (variant === "footer") {
    return (
      <div className="txt-small">
        © 2022{"  "}
        <div className='nav_logo'>
          <span className="txt-sm">MARVEL</span>
          <span className="txt-sm">KART</span>
        </div>
      </div>
    );
  }

  return (
    <Link to="/" className='nav_logo' role="img">
      <span>MARVEL</span>
      <span>
        KART
        <i className="fa-solid fa-cart-shopping" />
      </span>
    </Link>
  );
};
