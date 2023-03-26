import Hero from "./components/Hero";
import Who from "./components/Who";
import Contact from "./components/Contact";
import styled from "styled-components";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";


/*
CSS Gradient
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,121,1) 100%, rgba(0,212,255,1) 100%);
*/

const Container = styled.div`
  height: 100vh;
  color: white;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,121,1) 100%, rgba(0,212,255,1) 100%);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Hero/>
      <ProjectOne/>
      <ProjectTwo/>
      <ProjectThree/>
      <Contact/>
    </Container>
  )
}

export default App;
