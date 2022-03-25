import { Link } from "react-router-dom";
import { Logo } from "../";
import { useAuth } from "../../context";

export const Header = () => {
  const { userState, logoutUser } = useAuth();
  const wishListCount = userState.userData.wishlist.length;
  const cartCount = userState.userData.cart.length;
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <button className="btn hamburger-menu">
              <i className="fas fa-bars icon" />
            </button>
            <Logo />
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass icon" />
            <input
              className="search-field"
              type="search"
              placeholder="Search..."
              aria-label="Search Products"
            />
          </div>
          <div className="nav mobile-nav">
            <button className="btn nav-close-btn">
              <i className="fas fa-arrow-left" />
            </button>
            <ul className="menu">
              <li>
                {userState.token ? (
                  <button className="btn btn-primary" onClick={logoutUser}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                )}
              </li>
              <li>
                <Link to="/wishlist" className="wishlist">
                  <div className="badge-wrapper">
                    <i className="fas fa-heart menu-icon" />
                    {wishListCount > 0 && (
                      <span className="badge badge-info">{wishListCount}</span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="cart">
                  <div className="badge-wrapper">
                    <i className="fas fa-shopping-cart menu-icon" />
                    <span className="badge badge-info">{cartCount}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
