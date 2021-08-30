import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import animationData from '../../../public/animations/done.json';

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
`;

export default function Done() {
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
