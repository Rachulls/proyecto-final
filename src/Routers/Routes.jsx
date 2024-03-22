import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage";
import { MenuPage } from "../pages/MenuPage";
import { CombosPage } from "../pages/CombosPage";
import { PromocionesPage } from "../pages/PromocionesPage";
import { HamburguesasPage } from "../pages/HamburguesasPage";
import { BeneficiosPage } from "../pages/BeneficiosPage";
import { Hamburguesas } from "../components/Combos/Hamburguesas";
import { Bebidas } from "../components/Combos/Bebidas";
import { Pollo } from "../components/Combos/Pollo";
import { MenusAlPlato } from "../components/Combos/MenusAlPlato";
import { Loncheritas } from "../components/Combos/Loncheritas";
import { Complementos } from "../components/Combos/Complementos";
import { Helados } from "../components/Combos/Helados";
import { InkaChips } from "../components/Combos/InkaChips";

export function MyRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/combos" element={<CombosPage />}></Route>
        <Route path="/promociones" element={<PromocionesPage />}></Route>
        <Route path="/hamburguesas" element={<HamburguesasPage />}></Route>
        <Route path="/beneficios" element={<BeneficiosPage />}></Route>

        {/* SUB RUTAS DE  LA PÁGINA COMBOS */}
        <Route path="/combos/hamburguesas" element={<Hamburguesas />}></Route>
        <Route path="/combos/bebidas" element={<Bebidas />}></Route>
        <Route path="/combos/pollo" element={<Pollo />}></Route>
        <Route path="/combos/menus-al-plato" element={<MenusAlPlato />}></Route>
        <Route path="/combos/loncheritas" element={<Loncheritas />}></Route>
        <Route path="/combos/complementos" element={<Complementos />}></Route>
        <Route path="/combos/helados" element={<Helados />}></Route>
        <Route path="/combos/inka-chips" element={<InkaChips />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
