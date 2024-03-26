
import { BarraCategoriasNav } from "../components/Combos/BarraCategoriasNav"
import { CombosDeHamburguesas } from "../components/Combos/CombosDeHamburguesas"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import {Footer} from "../components/Footer"

export const CombosPage = () =>{
    
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
        <CombosDeHamburguesas/>
        <Footer/>
        </>
    )
}