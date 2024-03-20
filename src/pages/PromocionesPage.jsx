import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { OpcionesPromociones } from "../components/Promociones/OpcionesPromociones"

export const PromocionesPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <OpcionesPromociones/>
        </>
        
    )
}