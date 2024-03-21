import React from 'react';

import styled from 'styled-components';
import data from "../../../../proyecto-final/db.json";
import { Complementos } from './Complementos';
import Slider from 'react-slick';


const TablaPromociones = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 17px 0 15px;
    a{
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
    }
`;

const PromocionesGeneral = styled.div`
background-color: #F6F7F8;
`;

const PromocionesContainer = styled.div`
max-width: 1134px;
    width: 100%;
    margin: auto;
    
`;

const PromocionesBody = styled.div`

h1{
    margin: 15px 0 25px;
    color: #3b3c40;
    font-size: 30px;
    font-weight: 100;
    border-bottom: 1px solid #3b3c40;
    padding: 10px 0;
}
`;

const ListaPromosPersonales = styled.div`
display: flex;
flex-direction: row;
h2{
    margin: 15px 0;
    color: #3b3c40;
    font-size: 30px;
    font-weight: 100;
    padding-left: 10px;
}
`;

// const CardsPromosPersonales = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     width: 100%;
//     padding-bottom: 44px;
//     position: relative;
    
// `;

const Card = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border: 10px;
  
`;
const CardContent = styled.div`
    padding: 13px;
    margin: 0 10px;
    position: relative;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
`;
const CardImage = styled.div`
display: flex;
  background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,.5);
  width: 517px;
  height: 366px;
  color: #fff;
  border-radius: 10px;
  border-radius: 0 15px 15px 0;
    height: 231px;
    width: 255px;
    object-fit: cover;
    transition: all .4s;
`;

const settingsAll = {
  speed: 500,
  infinite: false,
  slidesToShow: 2,
  rows: 2,
};

const settingsResponsive = [
  {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    rows: 1,
    vertical: true,
    verticalSwiping: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    rows: 1,
    vertical: true,
    verticalSwiping: true,
    },
  },
];

export const OpcionesPromociones = () => {
  return (
    <div>
      <TablaPromociones>
<a href="">Promociones Personales</a>
<a href="">Promociones para 2</a>
<a href="">Promociones para compartir</a>
<a href="">Cupones</a>
      </TablaPromociones>
      <PromocionesGeneral>
      <PromocionesContainer>
        <PromocionesBody>
            <h1>PROMOCIONES DE HAMBURGUESAS PARA TI CON DELIVERY</h1>
        <ListaPromosPersonales>
            <img src="src\img\user-blackb.svg" alt="" />
            <h2>Promociones Personales</h2>
        </ListaPromosPersonales>
        <Slider {...settingsAll} responsive={settingsResponsive}>
            {data.promociones_personales.map((item) => (
                <Card>
                    <CardContent>
                        <h2>{item.nombre}</h2>
                        <p>{item.descripcion}</p>
                        <p>{item.precio_actual}</p>
                        <p>{item.precio_antiguo}</p>
                    </CardContent>
                <CardImage image={item.img}>
                </CardImage>
                </Card>
            ))}
        </Slider>
        </PromocionesBody>
        <Complementos/>
      </PromocionesContainer>
      </PromocionesGeneral>
      
    </div>
  )
}
