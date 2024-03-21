import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import LogoBembos from '../../img/logoBembos.png'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import IconTelefono from '../../img/iconTelefono.png'
import { IoIosClose } from "react-icons/io";
import { useState } from "react";



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Ropa+Sans:ital@0;1&display=swap');

`;

const SideBarMainContainer = styled.nav`
    height: 100vh;
    width: 300px;
    background-color: #173083;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 100;
    position: fixed;

    @media (max-width: 510px) {
      height: 100%;
    } 

`;

const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 40px;
`;

const Elemento = styled.a`
    font-family: "Ropa Sans", sans-serif;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 400px) {
      font-size: 1.4rem;
    } 

`;

const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    margin-top: 30px;

    img{
        width: 220px;
        height: 70px;
    }
`;

const SocialMediaIconsContainer = styled.div`
   display: flex;
   gap: 10px;
   margin: 0 auto;
   margin-top: 80px;
`;

const ContenedorIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    background-color: #ffffff;

    &:hover{
        background-color: #173083;
        transition: 0.5s;
        border: 1px solid white;

    }
`;
const IconoFacebook = styled(FaFacebookF)`
    color: #173083; // Cambia el color del icono a azul

    &:hover{
        color: #ffff;
        transition: 0.5s;

    }
`;

const IconoYoutube = styled(FaYoutube)`
    color: #173083; // Cambia el color del icono a azul
    &:hover{
        color: #ffff;
        transition: 0.5s;

    }
`;

const IconoTwitter = styled(FaTwitter)`
    color: #173083; // Cambia el color del icono a azul
    &:hover{
        color: #ffff;
        transition: 0.5s;

    }
`;

const IconoInstagram = styled(FaInstagram)`
    color: #173083; // Cambia el color del icono a azul
    &:hover{
        color: #ffff;
        transition: 0.5s;

    }
`;
const BotonCerrarSideBar = styled.button`
    width: 120px;
    position: absolute;
    right: -195px;
    background-color: #08206e;
    padding: 30px;
    border: 0;
    cursor: pointer;
`;


const CerrarIcono = styled(IoIosClose)`
    color: #ffff;
    margin-top: 20px;
`;

export const SideBar = () => {

    const [mostrarNav, setMostrarNav] = useState(false);

    const toggleNavBar = () => {
        setMostrarNav(!mostrarNav);
    };

    const cerrarSideBar = () => {
        setMostrarNav(false);
    };
  return(
    <SideBarMainContainer>
       <LogoContainer>
          <img src={LogoBembos} alt="" />
          <img src={IconTelefono} style={{width: "80px", height:"60px"}} alt="" />
          <BotonCerrarSideBar onClick={cerrarSideBar}>
                <CerrarIcono size={62} />
        </BotonCerrarSideBar>
        </LogoContainer> 
        
    <Lista>
        <Elemento>MI CUENTA</Elemento>
        <Elemento>LOCALES</Elemento>
        <Elemento>ZONAS DE REPARTO</Elemento>
        <Elemento>NOSOTROS</Elemento>
        <Elemento>CYBERBUENAZO</Elemento>
    </Lista> 
    <SocialMediaIconsContainer>
        <ContenedorIcon>
            <IconoFacebook size={30}/> 
        </ContenedorIcon>
       <ContenedorIcon>
            <IconoYoutube size={30}/>
        </ContenedorIcon> 
        <ContenedorIcon>
            <IconoTwitter size={30}/>
        </ContenedorIcon>  
        <ContenedorIcon>
            <IconoInstagram size={30}/>
        </ContenedorIcon>       
    </SocialMediaIconsContainer>
    
 </SideBarMainContainer>
  ) 
}