import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import data from "../../../../proyecto-final/db.json";

const ComplementosGeneral = styled.div`
padding-top: 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
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
`;

const CardContent = styled.div`
 margin-right: 60px;
    max-width: 20rem;
    width: 100%;
    overflow: hidden;
    border: 1.8px solid rgb(225, 225, 225);
    border-radius: 13px;
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
    font-family: din1451;
    outline: 0;
    height: 35px;
    margin: auto;
    display: block;
  }
`;

const settingsCards = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  swipeToSlide: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: false,
      },
    },
  ],

  style: {
    margin: "0 20px",
    columnGap: "-30px",
    position: "relative",
  },
};

export const Complementos = () => {
  return (
    <>
      <ComplementosGeneral>
        <h2>Complementos:</h2>
        <Slider {...settingsCards}>
          {data.complementos.map((item) => (
            <Card>
              <CardImage image={item.img}></CardImage>
              <CardContent>
                <h2>{item.nombre}</h2>
                <h3>S/{item.precio}</h3>
                <button>Ver más</button>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </ComplementosGeneral>
    </>
  );
};
