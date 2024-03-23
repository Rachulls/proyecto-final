
import { BarraCategoriasNav } from "../components/Combos/BarraCategoriasNav"
import { CombosDeHamburguesas } from "../components/Combos/CombosDeHamburguesas"
import { Hamburguesas } from "../components/Combos/Hamburguesas"
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

export const CombosPage = () =>{
    
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
        <CombosDeHamburguesas/>
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