import { BarraCategoriasNav } from "../components/Combos/BarraCategoriasNav"
import { CombosDeHamburguesas } from "../components/Combos/CombosDeHamburguesas"
import { Hamburguesas } from "../components/Combos/Hamburguesas"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { Pollo } from "../components/Combos/Pollo"
import { MenusAlPlato } from "../components/Combos/MenusAlPlato"

export const CombosPage = () =>{
    
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
        {/* <CombosDeHamburguesas/> */}
        {/* <Hamburguesas/> */}
        <MenusAlPlato/>
        </>
    )
}