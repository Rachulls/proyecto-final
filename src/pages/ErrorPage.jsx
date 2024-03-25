import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const ErrorPageContainer = styled.div`
  background-color: #fff;
  padding: 2rem 2rem 4rem 2rem;
  @media (min-width: 768px) {
    .error__pagina__contenedor {
      padding: 10rem 2rem 20rem 2rem;
    }
  }
  @media (min-width: 992px) {
    .error__pagina__contenedor {
      padding: 6rem 2rem 4rem 2rem;
    }
  }
  h2 {
    text-align: center;
    font-size: 3rem;
    color: #173083;
  }
`;

const ErrorPageContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  display: flex;
    flex-direction: row;
    justify-content: center;
  @media (min-width: 992px) {
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
    gap: 1rem;
    text-align: center;
`;
const ErrorPageMenu = styled.div`
text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 30px;
    transition: color .3s;
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
