import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import { BsCart2 } from "react-icons/bs";
import { LiaStoreAltSolid } from "react-icons/lia";
import Icono1 from '../../img/nav1.png'
import Icono2 from '../../img/nav2.png'
import Icono3 from '../../img/nav3.png'
import Icono4 from '../../img/nav4.png'
import Icono5 from '../../img/nav5.png'



const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Ropa+Sans:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Tauri&family=Teko:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Tauri&family=Teko:wght@300..700&display=swap');

`;

const MainContainer = styled.section`
    min-width: 100%;
    box-shadow: 0 0 10px 5px rgba(129, 129, 129, 0.5); /* Color oscuro con un brillo de 0.5 */
    padding: 20px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;

`;

const BarraNavegacion = styled.nav`
    width: 70%;
    display: flex;
    gap: 20px;
`;

const ElementoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

   
`;

const Parrafo = styled.a`
      font-family: "Teko", sans-serif;
      color: #173083;
      font-size: 1.5rem;
      font-weight: 600;
`;

const CarroContainer = styled.div`
    width: 30%;
    display: flex;
    gap: 10px;
    font-family: "Agdasima", sans-serif;

`;



export const SecondHalfHeader = () =>{
    return(

        <MainContainer>
            <BarraNavegacion>
                <ElementoContainer>
                    <img src={Icono1} alt="" />
                    <Parrafo>MENÚ</Parrafo>
                </ElementoContainer>
                <ElementoContainer>
                    <img src={Icono2} alt="" />
                    <Parrafo>COMBOS</Parrafo>
                </ElementoContainer>
                <ElementoContainer>
                    <img src={Icono3} alt="" />
                    <Parrafo>PROMOCIONES</Parrafo>
                </ElementoContainer>
                <ElementoContainer>
                    <img src={Icono4} alt="" />
                    <Parrafo>HAMBURGUESAS</Parrafo>
                </ElementoContainer>
                <ElementoContainer>
                    <img src={Icono5} alt="" />
                    <Parrafo>BENEFICIOS</Parrafo>
                </ElementoContainer>
                
            </BarraNavegacion>
            <CarroContainer>
                <ElementoContainer style={{gap:"20px", borderRadius:"90px", backgroundColor:"#fbb905", padding: "15px", paddingLeft:"50px", paddingRight:"20px"}}>
              
                <LiaStoreAltSolid size={60} />
    
                <Parrafo style={{ width:"210px"}}>Pide en tiendas <span style={{color: "red"}}>SIN COLAS</span></Parrafo>
                </ElementoContainer>

                <ElementoContainer style={{gap:"20px", borderRadius:"90px", backgroundColor:"#fbb905", padding: "15px", paddingLeft:"40px", paddingRight:"40px"}}>
                    <BsCart2 size={60}/>
                </ElementoContainer>
            </CarroContainer>
        </MainContainer>
    
    )
}