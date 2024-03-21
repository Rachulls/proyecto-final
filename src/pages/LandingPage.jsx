import { Banner } from '../components/Banner'
import { Body } from '../components/Body'
import { FirstHalfHeader } from '../components/Header/FirstHalfHeader'

import { SecondHalfHeader } from '../components/Header/SecondHalfHeader'

export const LandingPage = () =>{
return(
    <>
                 {/* EL HEADER */}
        <FirstHalfHeader></FirstHalfHeader>
        <SecondHalfHeader></SecondHalfHeader>
        <Banner></Banner>  
        <Body></Body>  
        
    </>

)
}