import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { Complementos } from "../components/Promociones/Complementos"
import { Cupones } from "../components/Promociones/Cupones"
import { PreguntasFrecuentes } from "../components/Promociones/PreguntasFrecuentes"
import { PromocionesParaCompartir } from "../components/Promociones/PromocionesParaCompartir"
import { PromocionesParaDos } from "../components/Promociones/PromocionesParaDos"
import { PromocionesPersonales } from "../components/Promociones/PromocionesPersonales"
import {Footer} from "../components/Footer"
import { OptionsProm } from "../components/Promociones/OptionsProm"
import { ErrorPage } from "./ErrorPage"


export const PromocionesPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <OptionsProm/>
        <PromocionesPersonales/>
        <Complementos/>
        <PromocionesParaDos/>
        <Complementos/>
        <PromocionesParaCompartir/>
        <Complementos/>
        <Cupones/>
        <PreguntasFrecuentes/>
        <Footer/>
        </>
    )
}