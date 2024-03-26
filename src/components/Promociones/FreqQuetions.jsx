import React from "react";
import styled from "styled-components";
import Faq from "react-faq-component";

const data = {
  title: "Preguntas Frecuentes De Promociones Delivery Online",
  rows: [
    {
      title:
        "¿Las promociones de hamburguesas delivery online se pueden pagar presencialmente en mi domicilio?",
      content:
        "¡Claro que sí! Puedes acceder a las <strong>promociones delivery</strong> online por nuestra Web o App y pagar en casa en efectivo o con tarjeta de crédito o débito Visa o Mastercard. Incluso con Yape. Recuerda que también puedes pagar en línea con tarjeta de manera fácil y 100% segura.",
    },
    {
      title:
        "¿Con cualquier método de pago accedo a las promociones de delivery online de Bembos?",
      content:
        "¡Obvio! Puedes disfrutar todas nuestras <strong>promociones hoy</strong> online y elegir pagar en efectivo o con tarjetas de crédito o débito Visa o Mastercard. Incluso con Yape.",
    },
    {
      title: "¿En qué ciudades puedo pedir las Promociones de Delivery?",
      content:
        "Puedes pedir tu <strong>delivery de hamburguesas</strong> favoritas en Lima. Para conocer la ubicación de nuestros locales ingresa a nuestra página de Locales.",
    },
    {
      title: "¿Acumulo puntos si elijo las promociones de delivery online?",
      content:
        "¡Así es! Sí acumulas puntos por cada compra Online que realices, sean promociones o productos del <strong>menú de hamburguesas.</strong> Con tus puntos acumulados puedes acceder a promociones exclusivas a través de la Web o App e ir construyendo una Relación con Bembos, a más amor, más beneficios.",
    },
    {
      title:
        "¿Para acceder a las promociones online delivery de Bembos tengo que ser cliente habitual?",
      content:
        "¡Bembos es para todos! Puedes acceder a nuestras <strong>promociones de delivery</strong> online si es tu primera compra o si ya eres Bembos Lover.",
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

export const FreqQuetions = () => {
    
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
