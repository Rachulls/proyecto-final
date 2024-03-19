import React from 'react';
import styled from 'styled-components';
import Tw from '../../img/tw.jpg';
import Fb from '../../img/fb.jpg';
import Bmbs from '../../img/fb-bembos.png';

const SocialContainer = styled.div`
    background: transparent;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #23388b;
    height: 265px;
    width: 100%;
    background: #fff;
    display: flex;
    max-width: 1134px;
    margin: 50px auto auto auto;
`;

const ContentLeft = styled.div`
width: 30%;
    background: #ffb500;
    height: 100%;
    display: flex;
    flex-direction: column;
    h4{
      font-size: 60px;
    color: #23388b;
    line-height: 10px;
    padding: 30px 0 18px 37px;
    }
    p{
      color: #23388b;
    padding-left: 37px;
    font-family: din1451;
    font-size: 16px;
    margin-bottom: 5px;
    }
    a{
      margin-top: 5px;
    margin-left: 37px;
    }
`;

const ContentRight = styled.div`
    position: absolute;
    width: 70%;
    padding: 25px 25px 25px 75px;
    img{
      position: absolute;
    left: 485px;
    top: 40px;
    z-index: 2;
    cursor: pointer;
    };
`;

export const SocialBembos = () => {
  return (
    <section>
      <SocialContainer>
        <ContentLeft>
          <h4>SOCIAL</h4>
          <br />
          <h4>BEMBOS</h4>
          <p>Compartir en:</p>
          <a href="https://twitter.com/BembosOficial">
            <img src={Tw} alt="" />
          </a>
          <a href="https://facebook.com/bembos/">
            <img src={Fb} alt="" />
          </a>
        </ContentLeft>
        <ContentRight>
          <a href="https://www.facebook.com/bembos/" target='_blank' >
          <img src={Bmbs}/>
          </a>
        </ContentRight>
      </SocialContainer>
    </section>
  )
}

