import { Complementos } from "../components/Promociones/Complementos"
import { Cupones } from "../components/Promociones/Cupones"
import { FiltroPromociones } from "../components/Promociones/FiltroPromociones"
import { PreguntasFrecuentes } from "../components/Promociones/PreguntasFrecuentes"
import { PromocionesParaCompartir } from "../components/Promociones/PromocionesParaCompartir"
import { PromocionesParaDos } from "../components/Promociones/PromocionesParaDos"
import { PromocionesPersonales } from "../components/Promociones/PromocionesPersonales"

export const PromocionesPage = () =>{
    return(
        <>
        <FiltroPromociones/>
        <PromocionesPersonales/>
        <Complementos/>
        <PromocionesParaDos/>
        <Complementos/>
        <PromocionesParaCompartir/>
        <Complementos/>
        <Cupones/>
        <PreguntasFrecuentes/>
        </>
    )
}