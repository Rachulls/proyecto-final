import React from 'react'
import styled from "styled-components";

const TablaPromociones = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 17px 0 15px;
  a {
    border: 2px solid #e2e2e2;
    text-decoration: none;
    padding: 8px 49px 6px;
    line-height: 1;
    border-radius: 22px;
    background: #f6f7f8;
    color: #0a0a0a;
    font-size: 19px;
    font-weight: 100;
    margin: 0 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* a:active{
      color: #173083;
    background: #fbb905;
    border-color: #fbb905;
    } */
  }
`;

export const FiltroPromociones = () => {
  return (
    <div>
      <TablaPromociones>
        <a href="">Promociones Personales</a>
        <a href="">Promociones para 2</a>
        <a href="">Promociones para compartir</a>
        <a href="">Cupones</a>
      </TablaPromociones>
    </div>
  )
}


