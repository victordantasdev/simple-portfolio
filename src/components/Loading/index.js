import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import animationData from '../../../public/animations/loading.json';

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default function Loading() {
  return (
    <AnimationContainer>
      <Lottie
        className="lottie-container basic"
        config={{
          animationData,
          loop: true,
          autoplay: true,
        }}
      />
    </AnimationContainer>
  );
}
