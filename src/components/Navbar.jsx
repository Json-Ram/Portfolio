import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.div`
  height: 50px;
  width: 100px;
  color: white;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 200px;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding 10px;
  margin-right: 200px;
  background-color: #020024;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <List>
          <ListItem>Github</ListItem>
          <ListItem>LinkedIn</ListItem>
          <ListItem>Resume</ListItem>
        </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"/>
          <Button>Contact Me</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar;