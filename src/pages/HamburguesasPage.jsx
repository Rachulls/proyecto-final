import { BarraCategoriasNav } from "../components/Hamburguesas/BarraCategoriasNav"
//import { CombosDeHamburguesas } from "../components/Combos/CombosDeHamburguesas"
import { Hamburguesas } from "../components/Hamburguesas/Hamburguesas"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { Pollo } from "../components/Combos/Pollo"
import { MenusAlPlato } from "../components/Combos/MenusAlPlato"
import { Loncheritas } from "../components/Combos/Loncheritas"
import { Complementos } from "../components/Combos/Complementos"
import { Bebidas } from "../components/Combos/Bebidas"
import { Helados } from "../components/Combos/Helados"
import { InkaChips } from "../components/Combos/InkaChips"
import {Footer} from "../components/Footer"

export const HamburguesasPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
        <Hamburguesas/>
        <Footer/>
        {/* <CombosDeHamburguesas/> */}
        {/* <Hamburguesas/> */}
        {/* <MenusAlPlato/> */}
        {/* <Loncheritas/> */}
        {/* <Complementos/> */}
        {/* <Bebidas/> */}
        {/* <Helados/> */}
        {/* <InkaChips/> */}
        </>
    )
}