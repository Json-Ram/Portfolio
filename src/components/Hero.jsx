import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 100px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: white;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #020024;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  cursor: pointer;
  padding: 10px;
`;

const Right= styled.div`
  flex: 1;
  position: relative;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: solid 4px white;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-left: 30px;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(10px);
    }
  }
`;


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Hey I'm Jason</Title>
          <WhatWeDo>
            <Subtitle>Full Stack Software Dev</Subtitle>
          </WhatWeDo>
          <Description>Vancouver, BC</Description>
          <Button>See My Work</Button>
        </Left>
        <Right>
          <Img src="./img/me.jpeg"/>
        </Right>
      </Container>
    </Section>
  )
};

export default Hero;