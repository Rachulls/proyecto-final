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
import { Helados } from "../components/Combos/Helados";
import { InkaChips } from "../components/Combos/InkaChips";
import { FoodSuplements } from "../components/Promociones/FoodSuplements";



export function MyRouters() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/menu/combos" element={<CombosPage />}></Route>
        <Route path="/promociones/delivery-hamburguesas" element={<PromocionesPage />}></Route>
        <Route path="/menu/hamburguesas" element={<HamburguesasPage />}></Route>
        <Route path="/beneficios" element={<BeneficiosPage />}></Route>

        {/* SUB RUTAS DE  LA PÁGINA COMBOS */}
        <Route path="/menu/hamburguesas" element={<Hamburguesas />}></Route>
        <Route path="/menu/bebidas" element={<Bebidas />}></Route>
        <Route path="/menu/pollo" element={<Pollo />}></Route>
        <Route path="/menu/menus-al-plato" element={<MenusAlPlato />}></Route>
        <Route path="/menu/loncheritas" element={<Loncheritas />}></Route>
        <Route path="/menu/complementos" element={<FoodSuplements />}></Route>
        <Route path="/menu/helados" element={<Helados />}></Route>
        <Route path="/menu/inka-chips" element={<InkaChips />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
