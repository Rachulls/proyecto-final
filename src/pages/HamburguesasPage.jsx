import { BarraCategoriasNav } from "../components/Hamburguesas/BarraCategoriasNav"
//import { CombosDeHamburguesas } from "../components/Combos/CombosDeHamburguesas"
import { Hamburguesas } from "../components/Hamburguesas/Hamburguesas"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import {Footer} from "../components/Footer"

export const HamburguesasPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
        <Hamburguesas/>
        <Footer/>
        </>
    )
}