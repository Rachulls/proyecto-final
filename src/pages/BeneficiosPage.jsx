import { Beneficios } from "../components/Beneficios/Beneficios"
import { FreqQuestionsBenefits } from "../components/Beneficios/FreqQuestionsBenefits"
import { Footer } from "../components/Footer"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"

export const BeneficiosPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <Beneficios/>
        <FreqQuestionsBenefits/>
        <Footer/>
        </>
    )
}