import styled from "styled-components";
import LogoBembos from "../../img/logoBembos.png";
import IconTelefono from "../../img/iconTelefono.png";
import Persona from "../../img/Persona.png";
import Flecha from "../../img/despliegueFlecha.png";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Ropa+Sans:ital@0;1&display=swap');


`;

const HeaderMainContainer = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Kulim Park", sans-serif;
  background-color: #173083;
  padding: 20px;

  @media (max-width: 950px) {
    display: none;
  }
`;

const BlackBanner = styled.div`
  background-color: #000000;
  width: 100%;
  text-align: center;
  @media (max-width: 950px) {
    display: none;
  }
`;


const PrimeraMitad = styled.section`
  width: 50%;
  background-color: #173083;
  display: flex;
`;


const SegundaMitad = styled.section`
  width: 50%;
  background-color: #173083;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Parrafo = styled.p`
  font-family: "Ropa Sans", sans-serif;
  color: #fbb905;
  font-weight: 700;
`;

const ContactoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FirstHalfHeader = () => {
  return (
    <>
      <BlackBanner>
        <img src="../src/img/black-banner.jpg" />
      </BlackBanner>
      <HeaderMainContainer>
        <PrimeraMitad>
          <Link to="/">
            <LogoContainer>
              <img src={LogoBembos} alt="" />
            </LogoContainer>
          </Link>
        </PrimeraMitad>
        <SegundaMitad>
          <FlexContainer>
            <div>
              <img src={IconTelefono} alt="" />
            </div>
            <ContactoContainer>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Parrafo>Delivery</Parrafo>
                <Parrafo style={{ color: "white" }}>LIMA</Parrafo>
                <img src={Flecha} alt="" />
              </div>
              <div>
                <Parrafo style={{ color: "white" }}>014191919</Parrafo>
              </div>
            </ContactoContainer>
          </FlexContainer>
          <FlexContainer>
            <img src={Persona} alt="" />
            <Parrafo style={{ color: "white" }}>
              Ingresar o crear tu cuenta
            </Parrafo>
          </FlexContainer>
        </SegundaMitad>
      </HeaderMainContainer>
    </>
  );
};
