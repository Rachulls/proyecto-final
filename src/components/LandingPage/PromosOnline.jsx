import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../../proyecto-final/db.json";

const OnlineProms = styled.div`
  margin-top: 50px;
  max-width: 1134px;
  width: 100%;
  margin: auto;
  padding-top: 50px;
`;

const ContainerCard = styled.div`
  padding: 0 0.4rem;
  padding-top: 30px;
`;

const Card = styled.div`
  display: flex !important;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(226, 223, 223);
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
  overflow: hidden;
`;

const CardImgOnline = styled.div`
  display: flex;
  background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 100%;
  height: 320px;
  border-radius: 15px 15px 0 0;
  -o-object-fit: cover;
  object-fit: cover;
  max-width: 100% !important;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    width: 100%;
    transition: all 0.4s;
    transform: scale(1.1) translateY(-5%) ;
    
  }
`;

const CardButtonOnline = styled.button`
  width: 90%;
  border: none;
  height: 40%;
  margin: 10px 0 0;
  text-align: center;
  cursor: pointer;
  background: #193694;
  border-radius: 25px;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  height: 43px;
`;

const Precio = styled.div`
  display: flex !important;

  justify-content: center;
  height: 20%;
  width: 70%;
  p {
    /* font-weight: 700; */
    color: #030819;
    font-size: 27px;
    display: inline-block;
    width: 47%;
    /* margin: auto; */
  }
  span {
    position: relative;
    /* width: 47%; */
    font-size: 20px;
    color: #ec0b0b;
    text-decoration: line-through;
    line-height: 1.8em;
    margin: auto;
  }
`;

const CardText = styled.div`
  padding: 10px;
  width: 100%;
  display: flex !important;
  align-items: center;
  flex-direction: column;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesPerRow: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const PromosOnline = () => {
  return (
    <OnlineProms>
      <h2>PROMOCIONES ONLINE</h2>
      <Slider {...settings}>
        {data.promociones_online.map((item) => (
          <ContainerCard>
            <Card>
              <CardImgOnline image={item.img}></CardImgOnline>
              <CardText>
                <a>{item.nombre}</a>
                <Precio>
                  <p>S/. {item.precio_actual}</p>
                  <span>S/{item.precio_antiguo}</span>
                </Precio>
                <CardButtonOnline>
                  <a>Ver más</a>
                </CardButtonOnline>
              </CardText>
            </Card>
          </ContainerCard>
        ))}
      </Slider>
    </OnlineProms>
  );
};
