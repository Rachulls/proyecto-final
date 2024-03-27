import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { Coupons } from "../components/Promociones/Coupons"
import { FreqQuetions } from "../components/Promociones/FreqQuetions"
import { PromsToShare } from "../components/Promociones/PromsToShare"
import { PromsForTwo } from "../components/Promociones/PromsForTwo"
import { PersonalProms } from "../components/Promociones/PersonalProms"
import {Footer} from "../components/Footer"
import { OptionsProm } from "../components/Promociones/OptionsProm"
import { FoodSuplements } from "../components/Promociones/FoodSuplements"


export const PromocionesPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <OptionsProm/>
        <PersonalProms/>
        <FoodSuplements/>
        <PromsForTwo/>
        <FoodSuplements/>
        <PromsToShare/>
        <FoodSuplements/>
        <Coupons/>
        <FreqQuetions/>
        <Footer/>
        </>
    )
}