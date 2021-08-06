import React from 'react';
import Lottie from 'react-lottie';
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <AnimationContainer>
      <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
    </AnimationContainer>
  );
}
