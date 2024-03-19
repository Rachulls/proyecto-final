import React from 'react';
import styled from "styled-components";
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

const BannerLanding = styled.div``;

const Preview = styled.div`
  left: 10px;
  right: auto;
  position: absolute;
  top: 10%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 60px !important;
  height: 60px !important;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin: auto 0;
  z-index: 10;
`;

const Next = styled.div`
  right: 10px;
  left: auto;
  position: absolute;
  top: 10%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 60px !important;
  height: 60px !important;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  outline: 0;
  margin: auto 0;
  z-index: 10;
`;

const SwiperContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const SwiperWraper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

const BannerPagination = styled.div`
  bottom: 40px;
  left: 0;
  width: 100%;
`;

const SwiperPagination = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  text-align: center;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
  bottom: 10px;
  left: 0;
  gap: 5px;
  width: 100%;
  span {
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: inline-block;
    border-radius: 100%;
    background: #23388b;
    opacity: 0.9;
    border: 0.5px solid #fff;
  }
`;

export const PrincipalBanner = () => {
  return (
    <div>
      <BannerLanding>
        <SwiperContainer>
          <SwiperWraper>
            <Preview>
              <img src={ImgPreview} />
            </Preview>
            <Next>
              <img src={ImgNext} />
            </Next>
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
            <img src={Image5} />
            <img src={Image6} />
            <img src={Image7} />
            <img src={Image8} />
          </SwiperWraper>
          <BannerPagination>
            <SwiperPagination>
              <span role="button"></span>
              <span role="button" aria-label="Go to slide 2"></span>
              <span role="button" aria-label="Go to slide 3"></span>
              <span role="button" aria-label="Go to slide 4"></span>
              <span role="button" aria-label="Go to slide 5"></span>
              <span role="button" aria-label="Go to slide 6"></span>
              <span role="button" aria-label="Go to slide 7"></span>
              <span role="button" aria-label="Go to slide 8"></span>
            </SwiperPagination>
          </BannerPagination>
        </SwiperContainer>
      </BannerLanding>
    </div>
  )
}
