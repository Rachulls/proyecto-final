import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import data from "../../../../proyecto-final/db.json";

const ComplementosGeneral = styled.div`
  padding-top: 60px;
  max-width: 1134px;
    width: 100%;
    margin: auto;
    background-color: #F6F7F8;
    @media (max-width: 900px) {
    width: 80%;
  }
`;

const Card = styled.div`
  padding: 0 30px;
  margin-top: 20px;
  margin-bottom: 45px;
  @media (max-width: 900px) {
    width: 50%;
  }
`;

const CardImage = styled.div`
  display: flex;
  background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 200px;
  height: 194px;
  gap: 20px;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  -o-object-fit: cover;
  max-width: 100% !important;
  &:hover{
      transition: all 0.4s;
      transform: scale(1.1) translateY(-5%);
  }
  a{
    color: #fff;
    text-decoration: underline;
    display: flex;
    padding: 160px 29px;
      }
      @media (max-width: 900px) {
    width: 100%;
  }
`;

const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
  max-width: 20rem;
  width: 100%;
  overflow: hidden;
  border: 1.8px solid rgb(225, 225, 225);
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 4px 4px 13px rgba(209, 209, 209, 0.6);
  button {
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
    outline: 0;
    height: 35px;
    margin-bottom: 20px;
    display: block;
  }
  @media (max-width: 900px) {
    margin-left: 100px;
    width: 100%;
  }
`;

const settingsAll = {
  speed: 500,
  infinite: false,
  slidesToShow: 4,
  rows: 1,
  responsive: [
    {
      breakpoint: 992,
     settings: {
     slidesToShow: 2,
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

export const Complementos = () => {
  return (
    <>
      <ComplementosGeneral>
        <h2>Complementos:</h2>
        <Slider {...settingsAll}>
          {data.complementos.map((item) => (
            <Card key={item.id}>
              <CardContent>
              <CardImage image={item.img}><a>Términos y Condiciones</a></CardImage>
                <h2>{item.nombre}</h2>
                <h3>S/. {item.precio}</h3>
                <button>Ver más</button>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </ComplementosGeneral>
    </>
  );
};
