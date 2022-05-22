import { Link } from 'react-router-dom';
import { Logo } from '../';
import { useAuth } from '../../context';

export const Header = () => {
  const { userState } = useAuth();
  const wishListCount = userState.userData.wishlist.length;
  const cartCount = userState.userData.cart.reduce(
    (acc, curr) => (acc += curr.qty),
    0
  );

  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='nav-brand'>
            <Logo />
          </div>
          <div className='search'>
            <i className='fa-solid fa-magnifying-glass icon' />
            <input
              className='search-field'
              type='search'
              placeholder='Search...'
              aria-label='Search Products'
            />
          </div>
          <div>
            <ul className='desktop-menu'>
              <li>
                {userState.token ? (
                  <Link className='btn btn-primary' to='/profile'>
                    <i className='fas fa-user' /> My Account
                  </Link>
                ) : (
                  <Link to='/login' className='btn btn-primary'>
                    Login
                  </Link>
                )}
              </li>
              <li>
                <Link to='/wishlist' className='wishlist'>
                  <div className='badge-wrapper'>
                    <i className='fas fa-heart menu-icon' />
                    {wishListCount > 0 && (
                      <span className='badge badge-info'>{wishListCount}</span>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/cart' className='cart'>
                  <div className='badge-wrapper'>
                    <i className='fas fa-shopping-cart menu-icon' />
                    {cartCount > 0 && (
                      <span className='badge badge-info'>{cartCount}</span>
                    )}
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
