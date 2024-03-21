import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../../proyecto-final/db.json";
import canje from "../../img/canje.jpg";

const MenuHambsOnline = styled.div`
 margin-top: 50px;
  max-width: 1134px;
  width: 100%;
  margin: auto;
  padding-top: 50px;
`;

const CardMenuHamOnline = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  max-width: 1134px;
  gap: 30px;
  padding-top: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 300px;
  width: 242.5px;
  height: 100%;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
  border-radius: 15px;
  background: #fff;
  overflow: hidden;
  img {
    max-height: 255px;
    width: 100%;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: flex-end;
    object-fit: cover;
    &:hover{
      width: 100%;
      transition: all 0.4s;
      transform: scale(1.1) translateY(-5%);
  }
  }
`;

const CardInfo = styled.div`
  padding: 10px 15px 15px;
  text-align: center;
  a {
    color: #030819;
    font-size: 23px;
    line-height: 22px;
    text-align: center;
    margin: auto;
    padding-left: 5px;
    min-height: 44px;
    display: inline-block;
    text-decoration: none;
  }
`;

const CardButton = styled.button`
  width: 100%;
  border: none;
  text-align: center;
  cursor: pointer;
  background: #193694;
  border-radius: 25px;
  font-size: 20px;
  line-height: 1.5;
  font-family: din1451;
  outline: 0;
  height: 43px;
  padding-top: 5px;
  color: #fff;
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
  ]
};

export const MenuHamburguersOnline = () => {
  return (
    <MenuHambsOnline>
      <h2>MENU DE HAMBURGUESAS ONLINE</h2>
      <Slider {...settings}>
        {data.menu.map((item) => (
      <CardMenuHamOnline>
          <Card>
            <img src={item.img} />
            <CardInfo>
              <a href={item.link}>{item.nombre}</a>
              <CardButton>
                <p>VER TODOS</p>
              </CardButton>
            </CardInfo>
          </Card>
      </CardMenuHamOnline>
        ))}
      </Slider>
      <img src={canje}/>
    </MenuHambsOnline>
  );
};
