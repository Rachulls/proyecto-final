import { Beneficios } from "../components/Beneficios/Beneficios"
import { Footer } from "../components/Footer"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"

export const BeneficiosPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <Beneficios/>
        <Footer/>
        </>
    )
}