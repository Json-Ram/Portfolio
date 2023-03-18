import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
`
const List = styled.ul`
`
const ListItem = styled.li`
`
const Right = styled.div`
`

const Work = () => {
  return (
    <Section>Work</Section>
  )
};

export default Work;