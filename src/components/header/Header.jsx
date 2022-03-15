import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <button className="btn hamburger-menu">
              <i className="fas fa-bars icon" />
            </button>
            <Logo variant={"header"} />
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
                <a href="./pages/login.html" className="btn btn-primary">
                  Login
                </a>
              </li>
              <li>
                <a href="./pages/wishlist.html" className="wishlist">
                  <div className="badge-wrapper">
                    <i className="fas fa-heart menu-icon" />
                    <span className="badge badge-info">3</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="./pages/cart.html" className="cart">
                  <div className="badge-wrapper">
                    <i className="fas fa-shopping-cart menu-icon" />
                    <span className="badge badge-info">3</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
