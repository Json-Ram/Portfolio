import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img``;

const Subtitle = styled.h2``;

const Description = styled.p``;

const Button = styled.button``;

const Right= styled.div`
  flex: 3;
`;

const Img = styled.img``;


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Speed. Violence. Momentum.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle></Subtitle>
          </WhatWeDo>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./img/surf.png"/>
        </Right>
      </Container>
    </Section>
  )
};

export default Hero;