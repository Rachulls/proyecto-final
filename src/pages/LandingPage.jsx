import { FirstHalfHeader } from "../components/Header/FirstHalfHeader";
import { SecondHalfHeader } from "../components/Header/SecondHalfHeader";
import { PrincipalBanner } from "../components/LandingPage/PrincipalBanner";
import { PromosOnline } from "../components/LandingPage/PromosOnline";
import { MenuHamburguersOnline } from "../components/LandingPage/MenuHamburguesasOnline";
import { SocialBembos } from "../components/LandingPage/SocialBembos";

export const LandingPage = () => {
  return (
    <>
      {/* EL HEADER */}
      <FirstHalfHeader></FirstHalfHeader>
      <SecondHalfHeader></SecondHalfHeader>
      <PrincipalBanner />
      <PromosOnline />
      <MenuHamburguersOnline />
      <SocialBembos />
    </>
  );
};
