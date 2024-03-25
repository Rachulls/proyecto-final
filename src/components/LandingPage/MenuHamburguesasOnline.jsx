import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../../proyecto-final/db.json";
import canje from "../../img/canje.jpg";
import { Link } from "react-router-dom";

const MenuHambsOnline = styled.div`
  margin-top: 50px;
  max-width: 1134px;
  width: 90%;
  margin: auto;
  padding-top: 50px;
  img {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
`;

const CardMenuHamOnline = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  max-width: 1134px;
  padding: 50px 0.8rem;
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
  img {
    max-height: 255px;
    width: 100%;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: flex-end;
    object-fit: cover;
    &:hover {
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
  ],
};

export const MenuHamburguersOnline = () => {
  return (
    <MenuHambsOnline>
      <h2>MENU DE HAMBURGUESAS ONLINE</h2>
      <Slider {...settings}>
        {data.menu.map((item) => (
          <CardMenuHamOnline key={item.id}>
              <Link to={item.link} key={item.nombre}>
              <Card>
                <img src={item.img} />
                <CardInfo>
                  <a>{item.nombre}</a>
                  <CardButton>
                    <p>VER TODOS</p>
                  </CardButton>
                </CardInfo>
              </Card>
          </Link>
            </CardMenuHamOnline>
        ))}
      </Slider>
      <img src={canje} />
    </MenuHambsOnline>
  );
};
