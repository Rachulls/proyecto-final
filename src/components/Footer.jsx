import styled from 'styled-components'
import LogoBembos from '../img/logoBembos3.png'
import IconTelefono from '../img/iconTelefono.png'
import Persona from '../img/Persona.png'
import Flecha from '../img/despliegueFlecha.png'
import IconVisa from '../img/visa.png'
import IconMastercard from '../img/mastercard.png'
import IconAmericanexpress from '../img/americanexpress.png'
import IconSafetypay from '../img/safetypay.png'
import ButtonComprobantes from '../img/buttonComprobantes.png'
import IconFacebook from '../img/facebook.png'
import IconYoutube from '../img/youtube.png'
import IconTwitter from '../img/twitter.png'
import IconInstagram from '../img/instagram.png'
import IconLibroreclamaciones from '../img/libroreclamaciones.png'
import { createGlobalStyle } from 'styled-components';
//import { type } from 'os'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Ropa+Sans:ital@0;1&display=swap');


`;

const FooterMainContainer = styled.footer`
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: "Kulim Park", sans-serif;
    background-color: #173083;
    padding: 100px;

     @media (max-width: 950px) {
        display: none;
    } 

`;

const PrimerSection = styled.section`
    width: 33%;
    background-color: #173083;
    display: flex;
    justify-content: center;
    
`;

const SegundoSection = styled.section`
    width: 33%;
    background-color: #173083;
    display: flex;
    justify-content: center;
    
`;

const TercerSection = styled.section`
    width: 33%;
    background-color: #173083;
    display: flex;
    justify-content: center;

`;

const Parrafo = styled.p`
      font-family: "Ropa Sans", sans-serif;
      color: white;
      font-weight: 700;
`;

const FormasPagoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const EnlacesContainer = styled.div`
display: flex;
gap: 10px;
`;

const ParentContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const Footer = () =>{

    return(<>

        <ParentContainer>
            <FooterMainContainer>
                <PrimerSection style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                    <div>
                        <EnlacesContainer>
                            <div>
                                <Parrafo>Locales</Parrafo>
                                <Parrafo>Zonas de Reparto</Parrafo>
                                <Parrafo>Nosotros</Parrafo>
                                <Parrafo>Atención al Cliente</Parrafo>
                                <Parrafo>Preguntas Frecuentes</Parrafo>
                                <Parrafo>Mapa de sitio</Parrafo>
                            </div>
                            <div>
                                <Parrafo>Políticas de Datos Personales</Parrafo>
                                <Parrafo>Términos y condiciones de</Parrafo> 
                                <Parrafo>Promociones</Parrafo>
                                <Parrafo>Derechos ARCO</Parrafo>
                            </div>
                        </EnlacesContainer>
                        <div>
                            <img src={LogoBembos} alt="" />
                        </div>
                    </div>
                </PrimerSection>
                <SegundoSection>
                    <FormasPagoContainer style={{textAlign: "center"}}>
                        <div style={{display: "flex", gap: "15px", alignItems: "center", justifyContent: "center"}}>
                            <img src={IconFacebook} alt="" />
                            <img src={IconYoutube} alt="" />
                            <img src={IconTwitter} alt="" />
                            <img src={IconInstagram} alt="" />
                        </div>
                        <div>
                            <Parrafo>FORMAS DE PAGO</Parrafo>
                        </div>

                        <div style={{display: "flex", gap: "15px", alignItems: "center", justifyContent: "center"}}>
                            <img src={IconVisa} alt="" />
                            <img src={IconMastercard} alt="" />
                            <img src={IconAmericanexpress} alt="" />
                        </div>

                        <div>
                            <img src={IconSafetypay} alt="" />
                        </div>

                        <div>
                            <img src={ButtonComprobantes} alt="" />
                        </div>
                        
                    </FormasPagoContainer>
                </SegundoSection>
                <TercerSection style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                    <div>
                        <Parrafo>¿Quieres recibir promociones y noticias?</Parrafo>
                    </div>
                    <div>
                        <input style={{fontSize: "16px", fontFamily: "Kulturista", width: "200px", height: "35px"}} type='text' placeholder='Tu Correo' />
                        <button style={{background: "#ffb500",fontSize: "12px", fontFamily: "Kulturista", width: "112px", height: "37px"}}>ENVIAR</button>
                    </div> 
                    <div>
                        <input type='checkbox' />
                        <label style={{color: "white"}}>He leído y revisado <span>los </span>
                            <a href='./' style={{color: "white"}}>términos y condiciones</a>
                        </label>
                    </div>
                    <div>
                        <img src={IconLibroreclamaciones} alt="" />
                    </div>
                </TercerSection>
            </FooterMainContainer>

            <div style={{borderTop: "1px solid", padding: "20px 0", color: "#a6adcb", backgroundColor: "#173083", textAlign: "center", minHeight: "32px"}}>
                <Parrafo>© 2019 Todos los derechos reservados</Parrafo>
            </div>
        </ParentContainer>
    </>)
}