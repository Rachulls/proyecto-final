import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../src/img/pre-cyber.jpg";
import Image2 from "../../../src/img/bb-extrema-2024.jpg";
import Image3 from "../../../src/img/churrita-nuevo.jpg";
import Image4 from "../../../src/img/duo-a-lo-pobre-bb-nov.jpg";
import Image5 from "../../../src/img/duo-queso-tocino-nov.jpg";
import Image6 from "../../../src/img/hawaiana-nuevo.jpg";
import Image7 from "../../../src/img/inseparables.jpg";
import Image8 from "../../../src/img/lanzamiento-bb.jpg";

const ContainerImg = styled.div`
  img {
    width: 100% !important;
    display: block !important;
  }
`;

export const PrincipalBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings}>
        <ContainerImg>
          <img src={Image1} alt="Slide 1" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image2} alt="Slide 2" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image3} alt="Slide 3" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image4} alt="Slide 4" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image5} alt="Slide 5" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image6} alt="Slide 6" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image7} alt="Slide 7" />
        </ContainerImg>
        <ContainerImg>
          <img src={Image8} alt="Slide 8" />
        </ContainerImg>
      </Slider>
    </>
  );
};
