import React from 'react';
import styled from 'styled-components';
import data from "../../../../proyecto-final/db.json";

const OnlineProms = styled.div`
margin-top: 50px;
`;

const CardPromosOnline = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: content-box;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition-property: transform;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const CardImgOnline = styled.div`
  display: flex;
  background: url(${(props) => (props.image ? props.image : "")}) center
    no-repeat;
  background-size: cover;
  cursor: pointer;
  width: 145px;
  height: 320px;
  border-radius: 15px 15px 0 0;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all 0.4s;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid rgb(0, 35, 149);
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.11);
`;

const CardButtonOnline = styled.button`
  width: 100%;
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
  display: flex;
  justify-content: center;
  margin: auto;
  height: 20%;
  gap: 8px;
  p {
    /* font-weight: 700; */
    color: #030819;
    font-size: 27px;
    border-radius: 20px;
    display: inline-block;
    width: 47%;
    margin: auto;
  }
  span {
    position: relative;
    width: 47%;
    font-size: 20px;
    color: #ec0b0b;
    text-decoration: line-through;
    line-height: 1.8em;
    margin: auto;
  }
`;

export const PromosOnline = () => {
  return (
    <div>
      <OnlineProms>
        <h2>PROMOCIONES ONLINE</h2>
        <CardPromosOnline>
          {data.promociones_online.map((item) => (
            <Card>
              <CardImgOnline image={item.img}></CardImgOnline>
              <a>{item.nombre}</a>
              <Precio>
                <p>S/{item.precio_actual}</p>
                <span>S/{item.precio_antiguo}</span>
              </Precio>
              <CardButtonOnline>
                <a>Ver más</a>
              </CardButtonOnline>
            </Card>
          ))}
        </CardPromosOnline>
      </OnlineProms>
    </div>
  )
}
