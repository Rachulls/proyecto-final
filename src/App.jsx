import "./index.css";
import { useState } from "react";
import { LandingPage } from "./pages/LandingPage";
import { MyRouters } from "./Routers/Routes";
import { SideBar } from "./components/Header/SideBar";
import { PromocionesPage } from "./pages/PromocionesPage";
import { FirstHalfHeader } from "./components/Header/FirstHalfHeader";
import { SecondHalfHeader } from "./components/Header/SecondHalfHeader";

function App() {
  return (
    <>
       <MyRouters/>
    </>
  );
}

export default App;
