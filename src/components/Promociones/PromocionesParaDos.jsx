import React from 'react';
import styled from 'styled-components';
import data from "../../../db.json";
import Slider from "react-slick";

const PromocionesContainer = styled.div`
max-width: 1134px;
  width: 100%;
  margin: auto;
  background-color: #f6f7f8;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

const PromocionesBody = styled.div`
h1 {
    margin: 15px 0 25px;
    color: #3b3c40;
    font-size: 30px;
    font-weight: 100;
    border-bottom: 1px solid #3b3c40;
    padding: 10px 0;
  }
`;

const ListaPromosParaDos = styled.div`
display: flex;
  flex-direction: row;
  h2 {
    margin: 15px 0;
    color: #3b3c40;
    font-size: 30px;
    font-weight: 100;
    padding-left: 10px;
  }
`;

const ContainerCard = styled.div`
padding: 0 2rem;
  padding-top: 30px;
`;

const Card = styled.div`
display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border: 1px solid rgb(226, 223, 223);
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
  overflow: hidden;
`;

const CardContent = styled.div`
padding: 13px;
  margin: 0 10px;
  position: relative;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  h2 {
    /* color: #193694; */
    padding-bottom: 15px;
  }
  button{
    width: 171px;
    max-width: 100%;
    border: none;
    text-align: center;
    cursor: pointer;
    background: #193694;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
    height: 35px;
    margin-left: 20px;
  }
`;
const Prices= styled.div`
h3{
      font-weight: 700;
    color: #030819;
    font-size: 27px;
    padding: 25px 0;
    border-radius: 20px;
    display: inline-block;
    width: 50%;
    };
    h4{
      position: relative;
    width: 50%;
    font-size: 20px;
    color: #ec0b0b;
    font-weight: 700;
    padding-left: 14px;
    float: right;
    margin: 4px 0 0;
    padding-top: 20px;
    text-decoration: line-through;
    }
`;

const Descuento = styled.div`
color: #fff;
    background: #d50e0e;
    border-radius: 15px;
    font-size: 17px;
    font-weight: 700;
    max-height: 40px;
    line-height: 36px;
    margin-top: 15px;
    margin-left: 15px;
    width: 60px;
    text-align: center;
`;

const CardImage = styled.div`
background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  border-radius: 10px;
  border-radius: 0 15px 15px 0;
  height: 231px;
  width: 255px;
  transition: all 0.4s;
  -o-object-fit: cover;
  object-fit: cover;
  max-width: 100% !important;
  overflow: hidden;
  &:hover{
      transition: all 0.4s;
      transform: scale(1.1) translateY(-5%);
      ${Descuento}{
      display: none !important;
    }
  }
`;


const Terminos = styled.div`
div{
  text-decoration: underline;
  transform: translateX(40px);
  color: #fff;

}

`;

const settingsAll = {
  speed: 500,
  infinite: false,
  slidesToShow: 2,
  rows: 2,
  responsive: [
    {
      breakpoint: 992,
     settings: {
     slidesToShow: 1,
      rows: 1,
      vertical: false,
      verticalSwiping: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        vertical: false,
        slidesToScroll: 1,
      },
   },
]
};
 
export const PromocionesParaDos = () => {
  return (
    <div>
      <PromocionesContainer>
        <PromocionesBody id="parados">
          <ListaPromosParaDos>
            <img src="../../src/img/promo-para-2.svg" alt="" />
            <h2>Promociones para 2</h2>
          </ListaPromosParaDos>
          <Slider {...settingsAll}>
            {data.promociones_para_dos.map((item) => (
              <ContainerCard key={item.id}>
                <Card>
                  <CardContent>
                    <h2>{item.nombre_azul} {item.nombre_negro}</h2>
                    <p>{item.descripcion}</p>
                    <Prices>
                      <h3>S/. {item.precio_actual}</h3>
                      <h4>S/. {item.precio_antiguo}</h4>
                    </Prices>
                    <button>Ver más</button>
                  </CardContent>
                  <CardImage image={item.img}>
                  <Descuento>
                      -{item.descuento}%
                    </Descuento>
                    <Terminos>
                      {item.terminos_blanco}
                      {item.terminos_negro}
                    </Terminos>
                  </CardImage>
                </Card>
              </ContainerCard>
            ))}
          </Slider>
        </PromocionesBody>
      </PromocionesContainer>
    </div>
  )
}
