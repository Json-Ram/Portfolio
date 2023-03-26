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


const ProjectThree = () => {
  return (
    <Section>
      <Container>
        <Left><Cube/></Left>
        <Right>
          <Title>Project Three</Title>
          <WhatWeDo>
            <Subtitle>Tech Stack here</Subtitle>
          </WhatWeDo>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
          <Button>Github</Button>
        </Right>
      </Container>
    </Section>
  )
};

export default ProjectThree;