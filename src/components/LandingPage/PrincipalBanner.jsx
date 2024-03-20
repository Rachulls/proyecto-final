import React, { useRef } from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../../src/img/pre-cyber.jpg";
import Image2 from "../../../src/img/bb-extrema-2024.jpg";
import Image3 from "../../../src/img/churrita-nuevo.jpg";
import Image4 from "../../../src/img/duo-a-lo-pobre-bb-nov.jpg";
import Image5 from "../../../src/img/duo-queso-tocino-nov.jpg";
import Image6 from "../../../src/img/hawaiana-nuevo.jpg";
import Image7 from "../../../src/img/inseparables.jpg";
import Image8 from "../../../src/img/lanzamiento-bb.jpg";
import ImgPreview from "../../../src/img/preview.png";
import ImgNext from "../../../src/img/next.png";


// const Preview = styled.div`
//   left: 10px;
//   right: auto;
//   position: absolute;
//   top: 10%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   bottom: 0;
//   width: 60px !important;
//   height: 60px !important;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 50%;
//   margin: auto 0;
//   z-index: 10;
// `;

// const Next = styled.div`
//   right: 10px;
//   left: auto;
//   position: absolute;
//   top: 10%;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   bottom: 0;
//   width: 60px !important;
//   height: 60px !important;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 50%;
//   outline: 0;
//   margin: auto 0;
//   z-index: 10;
// `;







// const SwiperPagination = styled.div`
//   display: flex;
//   justify-content: center;
//   position: absolute;
//   text-align: center;
//   transition: opacity 0.3s;
//   transform: translateZ(0);
//   z-index: 10;
//   bottom: 10px;
//   left: 0;
//   gap: 5px;
//   width: 100%;
//   span {
//     cursor: pointer;
//     width: 16px;
//     height: 16px;
//     display: inline-block;
//     border-radius: 100%;
//     background: #23388b;
//     opacity: 0.9;
//     border: 0.5px solid #fff;
//   }
// `;
  const PrevNext = styled.div`
  button{
    cursor: pointer;

  }
  `;


export const PrincipalBanner = () => {
  let carouselRef = useRef(null);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Configuración para habilitar el autoplay
    autoplaySpeed: 2000, // Velocidad en milisegundos entre cada slide
  };

  const nextSlide = () => {
      carouselRef.current.slickNext();
  };

  const prevSlide = () => {
      carouselRef.current.slickPrev();
  };

  return (
    <>
            <Slider ref={carouselRef} {...settings}>
              <div><img src={Image1} alt='Slide 1' /></div>
              <div><img src={Image2} alt='Slide 2' /></div>
              <div><img src={Image3} alt='Slide 3'/></div>
              <div><img src={Image4} alt='Slide 4'/></div>
              <div><img src={Image5} alt='Slide 5'/></div>
              <div><img src={Image6} alt='Slide 6'/></div>
              <div><img src={Image7} alt='Slide 7'/></div>
              <div><img src={Image8} alt='Slide 8'/></div>
                     
          </Slider>
          <PrevNext>
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
          </PrevNext>
              
    </>
  )
}
