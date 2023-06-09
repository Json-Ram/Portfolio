import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
`;

const Title = styled.h1`
  font-size: 74px;
`;


const Right= styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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


const Who = () => {
  return (
    <Section>
      <Container>
        <Left><Cube/></Left>
        <Right>
          <Title>My Projects</Title>
          <WhatWeDo>
            <Subtitle>JavaScript, React, NodeJS, C#, HTML5, CSS3</Subtitle>
          </WhatWeDo>
          <Description></Description>
          <Button>Contact Me</Button>
        </Right>
      </Container>
    </Section>
  )
};

export default Who;