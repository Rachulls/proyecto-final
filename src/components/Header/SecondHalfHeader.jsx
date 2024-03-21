import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import { BsCart2 } from "react-icons/bs";
import { LiaStoreAltSolid } from "react-icons/lia";
import Icono1 from '../../img/nav1.png'
import Icono2 from '../../img/nav2.png'
import Icono3 from '../../img/nav3.png'
import Icono4 from '../../img/nav4.png'
import Icono5 from '../../img/nav5.png'
import LogoBembos from '../../img/logoBembos2.png'
import IconTelefono from '../../img/iconTelefono2.png'
import MenuBurguer from '../../img/menuBurguer.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { SideBar } from '../Header/SideBar'
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Ropa+Sans:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Tauri&family=Teko:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Tauri&family=Teko:wght@300..700&display=swap');

`;

const MainContainer = styled.nav`
    min-width: 100%;
    box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.5); /* Color oscuro con un brillo de 0.5 */
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    
     @media (max-width: 1480px) {
      justify-content: space-around;
        padding-left: 0px;
        padding-right: 0px;
    } 

    @media (max-width: 1280px) {
      justify-content: center;
        gap:80px;
    } 

    @media (max-width: 950px) {
        justify-content: center;
        align-items: center;
        gap:0px;
    } 

`;

const BarraNavegacion = styled.nav`
    width: 70%;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
     @media (max-width: 1280px) {
        width: 40%;
        justify-content: center;
        gap: 15px;
    } 

    @media (max-width: 950px) {
        display: none;
    } 
`;

const ElementoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
     @media (max-width: 1265px) {
        flex-direction: column;

    }    

    @media (max-width: 955px) {
display: none;
    } 
`;

const ElementoCarritoContainer = styled.div`
    max-width: 286px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    justify-content: center;
    position: relative;

    @media (max-width: 950px) {
    gap:0;


    }`;

const BotonCarrito = styled.div`
    max-width: 286px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    justify-content: center;
    position: relative;

     @media (max-width: 950px) {
        display: none;
    } 
    `;


const Parrafo = styled.p`
      font-family: "Teko", sans-serif;
      color: #173083;
      font-size: 1.2rem;
      font-weight: 600;
      list-style: none;
      text-decoration: none;

       @media (max-width: 1265px) {
        font-size: 0.8rem;
    } 
`;

const CarroContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Agdasima", sans-serif;

     @media (max-width: 950px) {
        
      width: 100%;
      justify-content: center;
      position: relative;
    } 

`;

const Image = styled.img`
    display: none;
    height: 60px;
    object-fit: cover; /* Ajustar la imagen dentro del contenedor sin distorsionarla */
    position: relative;

     @media (max-width: 950px) {
        display: block;

      } 
`;




export const SecondHalfHeader = () =>{

    const [ mostrarNav, setMostrarNav ] = useState(false);


        const toggleNavBar = () => {
            setMostrarNav(!mostrarNav);
          };
    



 
    return(
        <MainContainer>
            <Image src={LogoBembos} alt="" />
            <Router>
            <BarraNavegacion>
            <Link to="/menu">
            <ElementoContainer>
                <img src={Icono1} alt="" />
                <Parrafo style={{fontSize: "1rem"}}>MENÚ</Parrafo>
            </ElementoContainer>
            </Link>

            <Link to="/combos">
             <ElementoContainer>
                <img src={Icono2} alt="" />
                <Parrafo style={{fontSize: "1rem"}}>COMBOS</Parrafo>
            </ElementoContainer>
            </Link>

             <Link to="/promociones">
                <ElementoContainer>
                    <img src={Icono3} alt="" />
                    <Parrafo style={{fontSize: "1rem"}}>PROMOCIONES</Parrafo>
                </ElementoContainer>
             </Link>
             
             <Link to="/hamburguesas">
                <ElementoContainer>
                     <img src={Icono4} alt="" />
                    <Parrafo style={{fontSize: "1rem"}}>HAMBURGUESAS</Parrafo>
                </ElementoContainer>
             </Link>
             <Link to="/beneficios">
                 <ElementoContainer>
                    <img src={Icono5} alt="" />
                    <Parrafo style={{fontSize: "1rem"}}>BENEFICIOS</Parrafo>
                 </ElementoContainer>
            </Link>
            </BarraNavegacion>
            </Router>
            <CarroContainer>
                {/* PRIMER BOTON */}
                <ElementoCarritoContainer style={{gap:"20px", borderRadius:"90px", backgroundColor:"#fbb905", padding: "5px", paddingLeft:"20px", paddingRight:"0px"}}>
                <LiaStoreAltSolid size={60} />
                <Parrafo style={{ width:"210px", fontSize:"1rem"}}>Pide en tiendas <span style={{color: "red"}}>SIN COLAS</span></Parrafo>
                </ElementoCarritoContainer>

                {/* SEGUNDO BOTON */}
                <BotonCarrito style={{gap:"20px", borderRadius:"90px", backgroundColor:"#fbb905", padding: "15px", paddingLeft:"30px", paddingRight:"30px"}}>
                    <BsCart2 size={40}/>
                </BotonCarrito>
            </CarroContainer>
            <Image src={IconTelefono} alt="" />
            <Image src={MenuBurguer} onClick={toggleNavBar} />
            {mostrarNav ? <SideBar /> : null}

        </MainContainer>
    
    )
}