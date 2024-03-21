
import { FirstHalfHeader } from "../components/Header/FirstHalfHeader";
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader";
import { PrincipalBanner } from "../components/LandingPage/PrincipalBanner";
import { PromosOnline } from "../components/LandingPage/PromosOnline";
import { MenuHamburguersOnline } from "../components/LandingPage/MenuHamburguesasOnline";
import { SocialBembos } from "../components/LandingPage/SocialBembos";
import { Banner } from '../components/Banner'
import { Body } from '../components/Body'
import { FirstHalfHeader } from '../components/Header/FirstHalfHeader'

export const LandingPage = () => {
  return (
    <>

      {/* EL HEADER */}
      <FirstHalfHeader/>
      <SecondHalfHeader/>
      <PrincipalBanner />
      <PromosOnline />
      <MenuHamburguersOnline />
      <SocialBembos />

                 {/* EL HEADER */}
        <FirstHalfHeader></FirstHalfHeader>
        <SecondHalfHeader></SecondHalfHeader>
        <Banner></Banner>  
        <Body></Body>  
    </>
  );
};
