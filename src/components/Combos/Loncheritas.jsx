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

  title: "PREGUNTAS FRECUENTES SOBRE LAS LONCHERITAS",

  rows: [
    {
      title:
        "¿Hay delivery de Loncheritas Bembos?",
      content:
        "Sí, elige la loncherita de tu preferencia comprando por delivery online. Y disfruta de un pack con la mejor hamburguesa a la parrilla o nuggets. Incluye papas fritas y bebida.",
    },
    {
      title:
        "¿Qué productos tienen las loncheritas Bembos?",
      content:
        "Hay 3 alternativas: Loncherita Básica, Loncherita Nuggets y Loncherita básica de pollo. Todas incluyen papitas fritas, salsas exquisitas y una bebida a tu preferencia. Disfruta dnuestras famosas Loncheritas para tus niños.",
    },
    {
      title: "¿Qué son las loncheritas Bembos?",
      content:
        "Las Loncheritas de Bembos son una divertida opción para los pequeños. Elige tu pack favorito que incluye papitas fritas y bebida, tienes la opción de elegir alguna Hamburguesa a la parrilla o deliciosos nuggets.",
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



export const Loncheritas = () => {
  return (
    <>
      <FirstHalfHeader />
      <SecondHalfHeader />
      <BarraCategoriasNav />

      <CombosDeHamburguesasMainContainer>
        <HamburguesasGridContainer>
          {data.loncheritas[0].tipos.map((item) => (
            <Card key={item.id}>
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

        <PreguntasContainer style={{ flexDirection: "column" }}>
          <Titulo>
            LONCHERITAS DE BEMBOS
          </Titulo>
          <p style={{ lineHeight: "25px", color: "black" }}>Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!</p>
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
