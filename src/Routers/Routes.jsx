import { HashRouter, Route, Routes } from "react-router-dom";

import { LandingPage } from "../pages/LandingPage";
import { MenuPage } from "../pages/MenuPage"
import { CombosPage } from "../pages/CombosPage";
import { PromocionesPage } from "../pages/PromocionesPage";
import { HamburguesasPage } from "../pages/HamburguesasPage";
import { BeneficiosPage } from "../pages/BeneficiosPage";

export const MyRouters = () =>{
    <HashRouter>
        <Routes>
            <Route path="/menu" element={<MenuPage/>}></Route>
            <Route path="/combos" element={<CombosPage/>}></Route>
            <Route path="/promociones" element={<PromocionesPage/>}></Route>
            <Route path="/hamburguesas" element={<HamburguesasPage/>}></Route>
            <Route path="/beneficios" element={<BeneficiosPage/>}></Route>
        </Routes>
    </HashRouter>
}