import React, {useRef} from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import Image1 from "../../src/img/pre-cyber.jpg";
import Image2 from "../../src/img/bb-extrema-2024.jpg";
import Image3 from "../../src/img/churrita-nuevo.jpg";
import Image4 from "../../src/img/duo-a-lo-pobre-bb-nov.jpg";
import Image5 from "../../src/img/duo-queso-tocino-nov.jpg";
import Image6 from "../../src/img/hawaiana-nuevo.jpg";
import Image7 from "../../src/img/inseparables.jpg";
import Image8 from "../../src/img/lanzamiento-bb.jpg";

const Container = styled.div`
  max-width: 1134px;
  width: 100%;
  margin: auto;
  padding: 20px;
`;

const Tiendas = styled.div`
  margin: 15px 0;
  width: 100%;
  padding: 21px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
`;

const Location = styled.div`
  width: 25%;
  align-self: center;
`;

const General = styled.div`
  width: 42%;
  display: flex;
  align-items: center;
`;

const Cambiar = styled.div`
  width: 33%;
  a {
    max-width: 115px;
    text-align: center;
    background: #21388b;
    padding: 0.6rem 1.25rem;
    border-radius: 17px;
    float: right;
    color: #fff;
    border: none;
    outline: 0;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 0.1rem;
    text-decoration: none;
    font-size: 19px;
  }
`;

const Titulo = styled.div`
  width: 100%;
  border-bottom: 1.4px solid #676767;
  margin-bottom: 30px;
`;

const MenuBanner = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 20px;
  }
`;

export const Banner = () => {
  let bannerMenu = useRef(null);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Container>
        <Tiendas>
          <Location>
            <p>
              Se está mostrando el menú del
              <br />
              restaurante
            </p>
          </Location>
          <General>
            <svg
              data-v-52da045c=""
              xmlns="http://www.w3.org/2000/svg"
              width="21.896"
              height="28.058"
              viewBox="0 0 21.896 28.058"
            >
              <g transform="translate(0 0)">
                <path
                  fill="#030819"
                  d="M1325.628,1016.306a1.264,1.264,0,0,1-.743-.241c-.416-.3-10.2-7.529-10.2-16.869a10.948,10.948,0,1,1,21.9,0c0,9.34-9.788,16.566-10.2,16.869A1.262,1.262,0,0,1,1325.628,1016.306Zm0-25.532a8.535,8.535,0,0,0-8.422,8.422c0,6.688,6.237,12.432,8.421,14.237,2.183-1.809,8.423-7.566,8.423-14.237A8.535,8.535,0,0,0,1325.628,990.774Z"
                  transform="translate(-1314.68 -988.248)"
                ></path>{" "}
                <g transform="translate(5.727 5.726)">
                  <path
                    fill="#030819"
                    d="M1331.235,1010.024a5.221,5.221,0,1,1,5.221-5.221A5.227,5.227,0,0,1,1331.235,1010.024Zm0-7.916a2.695,2.695,0,1,0,2.7,2.7A2.7,2.7,0,0,0,1331.235,1002.107Z"
                    transform="translate(-1326.014 -999.581)"
                  ></path>
                </g>
              </g>
            </svg>
            <p>GENERAL</p>
          </General>
          <Cambiar>
            <a>CAMBIAR</a>
          </Cambiar>
        </Tiendas>
        <Titulo>
          <h1>ELIGE TU MENÚ BEMBOS</h1>
        </Titulo>
        <MenuBanner>
          <Slider ref={bannerMenu} {...settings}>
             <img src={Image1} />
              <img src={Image2} />
              <img src={Image3} />
              <img src={Image4} />
              <img src={Image5} />
              <img src={Image6} />
              <img src={Image7} />
              <img src={Image8} />
          </Slider>
        </MenuBanner>
      </Container>
    </div>
  );
};
