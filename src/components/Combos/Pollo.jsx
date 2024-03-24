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

  title: "PREGUNTAS FRECUENTES SOBRE NUESTROS SANDWICHES DE POLLO",

  rows: [
    {
      title:
        "¿Qué adicionales puedo agregarle a mi helado Bembos?",
      content:
        "Podrás añadir hasta 9 toppings dulces, de chocolate o maní. Elige el mejor complemente para tu helado Mini Princesa y Choco Vainilla.",
    },
    {
      title:
        "¿Puedo comprar mi postre de helados Bembos por Delivery?",
      content:
        "Sí, puedes elegir y pedir tus helados por Delivery Online. Tenemos para ti el helado Mini Princesa de Vainilla o Mixta y también el helado Choco Maní. Recuerda añadir tus toppings preferidos y disfrutar de este exquisito antojo.",
    },
    {
      title: "¿Qué sabores de helados Bembos existen?",
      content:
        "Existen dos tipos de helados en la tienda en línea de Bembos. Tenemos el Helado Mini Princesa que es un helado de vainilla o mixto con trozos de chocolate princesa y fudge de chocolate. Y también está el Choco Maní que está hecho con helado de vainilla y una delicios cobertura de chocolate derretido con maní picado.",
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


export const Pollo = () => {
  return (
    <>

      <FirstHalfHeader />
      <SecondHalfHeader />
      <BarraCategoriasNav />


      <CombosDeHamburguesasMainContainer>
        <HamburguesasGridContainer>
          {data.pollo[0].tipos.map((item) => (
            <Card>
              <ImageContainer>
                <img src={item.img} alt="" />
              </ImageContainer>
              <ContentContainer>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "100" }}>{item.nombre}</h3>
                <Precio>S/. {item.precio}</Precio>
                <Terminos>Términos y condiciones</Terminos>
                <SimpleButon>Ver más</SimpleButon>
              </ContentContainer>
            </Card>
          ))}
        </HamburguesasGridContainer>
        <PreguntasContainer style={{flexDirection: "column"}}>
        <Titulo>
        SÁNDWICHES Y HAMBURGUESAS DE POLLO
          </Titulo>
          <p style={{lineHeight:"25px", color:"black"}}>En Bembos no solamente tenemos hamburguesas de carne, también tenemos hamburguesas y sándwiches de pollo broaster y grill. Tenemos las mejores combinaciones de ingredientes que hacen que nuestras hamburguesas tengan un sabor irresistible. Pídelas por delivery web y empieza a disfrutar de lo mejor en hamburguesas y sándwiches de Bembos.</p>
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