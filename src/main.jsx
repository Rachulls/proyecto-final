import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { MenuPage } from "./pages/MenuPage.jsx";
import { CombosPage } from "./pages/CombosPage.jsx";
import { PromocionesPage } from "./pages/PromocionesPage.jsx";
import { InkaChips } from "./components/Combos/InkaChips.jsx";
import { Helados } from "./components/Combos/Helados.jsx";
import { Loncheritas } from "./components/Combos/Loncheritas.jsx";
import { MenusAlPlato } from "./components/Combos/MenusAlPlato.jsx";
import { Pollo } from "./components/Combos/Pollo.jsx";
import { Bebidas } from "./components/Combos/Bebidas.jsx";
import { Hamburguesas } from "./components/Combos/Hamburguesas.jsx";
import { BeneficiosPage } from "./pages/BeneficiosPage.jsx";
import { HamburguesasPage } from "./pages/HamburguesasPage.jsx";
import "./index.css";
import { FoodSuplements } from "./components/Promociones/FoodSuplements.jsx";

const router = createBrowserRouter([
  {
    //CAMBIAR POR EL CARRITO DE COMPRAS
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/:categoria",
        element: <CombosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/promociones/delivery-hamburguesas",
        element: <PromocionesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/hamburguesas",
        element: <HamburguesasPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/beneficios",
        element: <BeneficiosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/hamburguesas",
        element: <Hamburguesas />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/bebidas",
        element: <Bebidas />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/pollo",
        element: <Pollo />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/menus-al-plato",
        element: <MenusAlPlato />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/loncheritas",
        element: <Loncheritas />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/complementos",
        element: <FoodSuplements />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/helados",
        element: <Helados />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/inka-chips",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} fallbackElement={<LandingPage />} />
  </>
);
