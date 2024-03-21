import React from "react";
import styled from "styled-components";
import data from "../../../proyecto-final/db.json";

const Container = styled.div`
  max-width: 1134px;
  width: 100%;
  margin: auto;
  padding-top: 20px;
`;

const CardContain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  position: relative;
  margin-bottom: 20px;
  max-width: 1134px;
  gap: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CardImage = styled.div`
  display: flex;
  background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  width: 517px;
  height: 366px;
  color: #fff;
  border-radius: 10px;
  text-shadow: -4px -4px 0 #d90f06, -4px -3px 0 #d90f06, -4px -2px 0 #d90f06,
    -4px -1px 0 #d90f06, -4px 0 0 #d90f06, -4px 1px 0 #d90f06,
    -4px 2px 0 #d90f06, -4px 3px 0 #d90f06, -4px 4px 0 #d90f06,
    -3px -4px 0 #d90f06, -3px -3px 0 #d90f06, -3px -2px 0 #d90f06,
    -3px -1px 0 #d90f06, -3px 0 0 #d90f06, -3px 1px 0 #d90f06,
    -3px 2px 0 #d90f06, -3px 3px 0 #d90f06, -3px 4px 0 #d90f06,
    -2px -4px 0 #d90f06, -2px -3px 0 #d90f06, -2px -2px 0 #d90f06,
    -2px -1px 0 #d90f06, -2px 0 0 #d90f06, -2px 1px 0 #d90f06,
    -2px 2px 0 #d90f06, -2px 3px 0 #d90f06, -2px 4px 0 #d90f06,
    -1px -4px 0 #d90f06, -1px -3px 0 #d90f06, -1px -2px 0 #d90f06,
    -1px -1px 0 #d90f06, -1px 0 0 #d90f06, -1px 1px 0 #d90f06,
    -1px 2px 0 #d90f06, -1px 3px 0 #d90f06, -1px 4px 0 #d90f06, 0 -4px 0 #d90f06,
    0 -3px 0 #d90f06, 0 -2px 0 #d90f06, 0 -1px 0 #d90f06, 0 0 0 #d90f06,
    0 1px 0 #d90f06, 0 2px 0 #d90f06, 0 3px 0 #d90f06, 0 4px 0 #d90f06,
    1px -4px 0 #d90f06, 1px -3px 0 #d90f06, 1px -2px 0 #d90f06,
    1px -1px 0 #d90f06, 1px 0 0 #d90f06, 1px 1px 0 #d90f06, 1px 2px 0 #d90f06,
    1px 3px 0 #d90f06, 1px 4px 0 #d90f06, 2px -4px 0 #d90f06, 2px -3px 0 #d90f06,
    2px -2px 0 #d90f06, 2px -1px 0 #d90f06, 2px 0 0 #d90f06, 2px 1px 0 #d90f06,
    2px 2px 0 #d90f06, 2px 3px 0 #d90f06, 2px 4px 0 #d90f06, 3px -4px 0 #d90f06,
    3px -3px 0 #d90f06, 3px -2px 0 #d90f06, 3px -1px 0 #d90f06, 3px 0 0 #d90f06,
    3px 1px 0 #d90f06, 3px 2px 0 #d90f06, 3px 3px 0 #d90f06, 3px 4px 0 #d90f06,
    4px -4px 0 #d90f06, 4px -3px 0 #d90f06, 4px -2px 0 #d90f06,
    4px -1px 0 #d90f06, 4px 0 0 #d90f06, 4px 1px 0 #d90f06, 4px 2px 0 #d90f06,
    4px 3px 0 #d90f06, 4px 4px 0 #d90f06;
  h2 {
    font-size: 40px;
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #21388b;
  color: #fff;
  border-radius: 25px;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 25px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const MenuItems = () => {
  return (
    <Container>
      <CardContain>
        {data.menu.map((item) => (
          <Card>
            <CardImage image={item.img}>
              <h2>{item.nombre}</h2>
            </CardImage>
            <CardButton>
              <a href={item.link}>Ver todos</a>
            </CardButton>
          </Card>
        ))}
      </CardContain>
    </Container>
  );
};
