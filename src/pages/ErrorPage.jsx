import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const ErrorPageContainer = styled.div`
  background-color: #fff;
  padding: 32px 32px 64px 32px;
  @media (min-width: 768px) {
    .error__pagina__contenedor {
      padding: 160px 32px 320px 32px;
    }
  }
  @media (min-width: 900px) {
    .error__pagina__contenedor {
      padding: 96px 32px 64px 32px;
    }
  }
  h2 {
    text-align: center;
    font-size: 30px;
    color: #173083;
  }
`;

const ErrorPageContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  display: flex;
    flex-direction: row;
    justify-content: center;
  @media (min-width: 900px) {
    .error__pagina__contenido {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  img {
    width: 50%;
    padding-top: 20px;
    @media (min-width: 768px) {
      .error__pagina__contenedor__imagen img {
        width: 40%;
      }
    }
    @media (min-width: 992px) {
      .error__pagina__contenedor__imagen img {
        width: 80%;
      }
    }
  }
`;

const ErrorPageMessage = styled.div`
display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding-top: 20px;
`;
const ErrorPageMenu = styled.div`
text-align: center;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 30px;
`;

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <ErrorPageContainer>
      <h2>Hubo un inconveniente, lamentamos lo ocurrido...</h2>
      <ErrorPageContain>
        <img src="../src/img/burguer_404.png" />
      </ErrorPageContain>
      <ErrorPageMessage>
        <p>
        {error.statusText || error.message}
        </p>
      </ErrorPageMessage>
      <ErrorPageMenu>
        <Link to={"/"}>Ir al inicio</Link>
      </ErrorPageMenu>
    </ErrorPageContainer>
  );
};
