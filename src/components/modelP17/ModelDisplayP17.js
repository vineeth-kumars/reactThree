import React from 'react';
import { Canvas } from '@react-three/fiber';
import ModelP17 from './P17';
import {OrbitControls} from '@react-three/drei';
import styled from "styled-components";


function ModelDisplayP17() {
  const Wrapper = styled.div`
  canvas {
height:800px
  }
`;
  return (
    <Wrapper className="App">
        <Canvas className='canvas'>
          <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <ModelP17 />
        </Canvas>
    </Wrapper>
  )
  
}

export default ModelDisplayP17;