import React, { useState } from "react";
import styled from "styled-components";
// import Slider from "react-slick";

const TablaPromociones = styled.div`
  background: #fff;
  display: flex;
  padding: 17px 0 15px;
  overflow-x: scroll;
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
`;

const ButtonProm = styled.button`
  border: 2px solid #e2e2e2;
  text-decoration: none;
  padding: 8px 49px 6px;
  line-height: 1;
  border-radius: 22px;
  background-color: ${({ isActive }) => (isActive ? "#fbb905" : "#f6f7f8")};
  color: ${({ isActive }) => (isActive ? "#000000" : "#173083")};
  border: 2px solid ${({ isActive }) => (isActive ? "#fbb905" : "#f6f7f8")};
  font-size: 19px;
  font-weight: 100;
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #173083;
  cursor: pointer;
`;

export const OptionsProm = () => {
  const [activeButton, setActiveButton] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveButton(sectionId);
  };

  return (
    <div>
      <TablaPromociones>
        <ButtonContainer>
          <ButtonProm
            isActive={activeButton === "personales"}
            onClick={() => handleClick("personales")}
          >
            Promociones Personales
          </ButtonProm>
          <ButtonProm
            isActive={activeButton === "parados"}
            onClick={() => handleClick("parados")}
          >
            Promociones para 2
          </ButtonProm>
          <ButtonProm
            isActive={activeButton === "compartir"}
            onClick={() => handleClick("compartir")}
          >
            Promociones para compartir
          </ButtonProm>
          <ButtonProm
            isActive={activeButton === "cupones"}
            onClick={() => handleClick("cupones")}
          >
            Cupones
          </ButtonProm>
        </ButtonContainer>
      </TablaPromociones>
    </div>
  );
};
