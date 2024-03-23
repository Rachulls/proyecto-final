import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader"
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader"
import { MenuItems } from "../components/Menu/MenuItems"

export const MenuPage = () =>{
    return(
        <>
        <FirstHalfHeader/>
        <SecondHalfHeader/>
        <Banner/>
        <MenuItems/>
        <Footer/>
        </>
    )
}