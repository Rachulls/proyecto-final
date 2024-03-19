import React from "react";
import { PrincipalBanner } from "../components/LandingPage/PrincipalBanner";
import { PromosOnline } from "../components/LandingPage/PromosOnline";
import { MenuHamburguersOnline } from "../components/LandingPage/MenuHamburguesasOnline";
import { SocialBembos } from "../components/LandingPage/SocialBembos";

export const LandingPage = () => {
  return (
    <>
      <PrincipalBanner/>
      <PromosOnline/>
      <MenuHamburguersOnline/>
      <SocialBembos/>
    </>
  );
};
