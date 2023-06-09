import React from "react";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`

const Cube = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <mesh>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial color="lightblue"/>
        </mesh>
      </Canvas>
    </Container>
  )
}

export default Cube;