import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header, RedirectAuth, RequiresAuth } from './components';
import {
  Home,
  Products,
  Login,
  Register,
  Wishlist,
  Cart,
  Error,
  Profile,
  Info,
  Addresses,
  Orders,
} from './pages';

function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === '/login' || location.pathname === '/register';
  return (
    <>
      {!routeCheck && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<Error />} />
        <Route element={<RedirectAuth />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<RequiresAuth />}>
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='/profile' element={<Profile />}>
            <Route path='/profile' element={<Info />} />
            <Route path='/profile/addresses' element={<Addresses />} />
            <Route path='/profile/orders' element={<Orders />} />
          </Route>
        </Route>
      </Routes>
      {!routeCheck && <Footer />}
    </>
  );
}

export default App;
