import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Products } from "./pages";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();
  const routeCheck =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      {!routeCheck && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!routeCheck && <Footer />}
    </>
  );
}

export default App;
