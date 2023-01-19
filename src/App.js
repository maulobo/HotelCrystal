import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Contacto from "./pages/contact/Contacto";
import Home from "./pages/home/Home";
import Servicios from "./pages/servicios/Servicios";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComp />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="servicios" element={<Servicios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
