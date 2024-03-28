//import React from "react";
import styled from "styled-components";
import Faq from "react-faq-component";

const data = {
  title: "PREGUNTAS FRECUENTES",
  rows: [
    {
      title:
        "¿Cómo funcionan los puntos?",
      content:
        "Tus consumos se convierten en puntos para acceder a distintos estados de relación y así seguir obteniendo más productos. Conforme vayas fortaleciendo la relación, podrás acceder a más beneficios y descuentos!",
    },
    {
      title:
        "¿Cuáles son los beneficios?",
      content:
        "Existen diferentes beneficios en cada estado de relación que vas alcanzando. Puedes tener desde descuentos con más del 30% hasta delivery gratis.",
    },
    {
      title: "¿Hay beneficios por el método de pago?",
      content:
        "Actualmente no existe un beneficio por pagar a través de un método de pago en particular.",
    },
    {
      title: "¿Los cupones de descuentos tienen fecha límite para usar?",
      content:
        "Si tienen una fecha límite y puedes revisar los legales en el pie de página del mismo.",
    },
    {
      title:
        "¿Hay beneficios en compras por la App?",
      content:
        "Haciendo tu compra a través de la APP o el sitio web podrás acumular puntos para tener más beneficios con nosotros.",
    },
  ],
};

const PreguntasContainer = styled.div`
width: 84%;
display: flex !important;
margin-left: 100px;
padding-top: 30px;
background-color: #F6F7F8;
@media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

export const FreqQuestionsBenefits = () => {
    
  return (
    <>
    <PreguntasContainer>
      <Faq
          data={data}
           styles={{
            titleTextColor: "#21388b",
            rowTitleColor: "#21388b",
            bgColor: "#F6F7F8"
        }}
        />
    </PreguntasContainer>
        
    </>
  );
};