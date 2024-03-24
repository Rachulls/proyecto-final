import styled from "styled-components";
import data from "../:./../../../db.json";
import { FirstHalfHeader } from "../Header/FirstHalfHeader";
import { SecondHalfHeader } from "../Header/SecondHalfHeader";
import { BarraCategoriasNav } from "./BarraCategoriasNav";
import Faq from "react-faq-component";

const CombosDeHamburguesasMainContainer = styled.section`
  width: 65%;
  margin: 0 auto;
`;

const Titulo = styled.h2`
  color: #173083;
  font-size: 1.8rem;
`;

const HamburguesasGridContainer = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Grid de 3 columnas que se ajustan al tamaño del contenedor */
    gap: 7px;
    row-gap: 30px;
    background-color: #ffffff;
    padding: 20px;
    place-items: center;
    margin-top: 10px;
    box-shadow: 0 0 10px 5px rgba(241, 239, 239, 0.5); /* Color oscuro con un brillo de 0.5 */

`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 277px;
  border-radius: 40px;
  box-shadow: 0 0 10px 5px rgba(192, 190, 190, 0.5); /* Color oscuro con un brillo de 0.5 */
  padding-bottom: 20px;

  img{
    width: 100%;
    height: 255px;
    object-fit: cover;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    transition: transform 0.4s, transform-origin 0.4s; /* Agregar transición para la propiedad transform y transform-origin */
    cursor: pointer;

    &:hover{
        transform: scale(1.1) translateY(-5%);
    transform-origin: center center;
    }}`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;

const Precio = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
`;

const Terminos = styled.p`
    font-weight: 700;
    white-space: nowrap;
    text-decoration: underline;
    cursor: pointer;
`;

const SimpleButon = styled.button`
    background-color: #173083;
    border: 0;
    padding: 10px;
    color: #ffff;
    border-radius: 90px;
    font-size: 1.1rem;
    width: 80%;
    cursor: pointer;

`;

const datos = {

  title: "PREGUNTAS FRECUENTES SOBRE NUESTRAS HAMBURGUESAS",


  rows: [
    {
      title:
        "¿Cuántos puntos recibo por comprar una hamburguesa online delivery?",
      content:
        "Los puntos que se reciben por la compra de algún producto de nuestra carta de hamburguesas varían entorno al tamaño de la misma, en proporción se otorga un punto por cada S/1. Conoce tus puntos desde la APP o ingresando en la Web.",
    },
    {
      title:
        "¿De qué están hechas las hamburguesas a la parrilla de Bembos?",
      content:
        "Nuestras hamburguesas Bembos están hechas de carnes de res junto a los más exquisitos ingredientes peruanos.",
    },
    {
      title: "¿Las hamburguesas delivery de Bembos están acompañadas de papas fritas?",
      content:
        "Sí, Puedes hacer tu pedido de hamburguesas online y podrás comprarla únicamente sola o con papas fritas, incluso puedes pedirlo en combo (Papas+Gaseosa de 500ml)",
    },
    {
      title: "¿Qué adicionales tienen las hamburguesas a la parrilla de Bembos?",
      content:
        "Los adicionales que tiene nuestra carta de hamburguesas varían según la elección del usuario, entre estos tenemos: Plátano, huevo, queso, tocino, papas al hilo y las más exquisitas salsas peruanas.",
    },

  ],
};

const PreguntasContainer = styled.div`
width: 100%;
display: flex !important;
margin-left: 100px;
padding-left: 10px;
padding-top: 30px;
background-color: #ffffff;
margin: 0 auto;

@media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;


export const Hamburguesas = () => {
  return (
    <>
      <FirstHalfHeader/>
        <SecondHalfHeader/>
        <BarraCategoriasNav/>
      <CombosDeHamburguesasMainContainer>
        <HamburguesasGridContainer>
        {data.hamburguesas.map((item) => (
          <Card>
             <ImageContainer>
             <img src={item.img} alt="" />
                </ImageContainer>            
            <ContentContainer>
                <h3 style={{fontSize:"1.4rem", fontWeight:"100"}}>{item.nombre}</h3>
                <Precio>S/. {item.precio}</Precio>
                <Terminos>Términos y condiciones</Terminos>
                <SimpleButon>Ver más</SimpleButon>
            </ContentContainer>
          </Card>
        ))}
        
        </HamburguesasGridContainer>
        <PreguntasContainer style={{flexDirection: "column"}}>
        <Titulo>
            HAMBURGUESAS A LA PARRILLA
          </Titulo>
          <p style={{lineHeight:"25px", color:"black"}}>Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!</p>
        </PreguntasContainer>
      

          
        <PreguntasContainer>
      <Faq
          data={datos}
           styles={{
            titleTextColor: "#21388b",
            rowTitleColor: "#21388b",
            bgColor: "#ffffff",
            arrowColor: "red",

          }}
        />
    </PreguntasContainer>

      </CombosDeHamburguesasMainContainer>
    </>
  );
};