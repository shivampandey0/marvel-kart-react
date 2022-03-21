import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Products, Login, Register } from "./pages";

function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {!routeCheck && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!routeCheck && <Footer />}
    </>
  );
}

export default App;
