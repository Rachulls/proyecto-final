import { Complementos } from "../components/Promociones/Complementos"
import { FiltroPromociones } from "../components/Promociones/FiltroPromociones"
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
        </>
    )
}