import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import loading from './lottieAnimations/loading.json';
import success from './lottieAnimations/form-loading.json';
import error from './lottieAnimations/error.json';

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 0;
`;

export function Loading() {
  return (
    <AnimationContainer>
      <Lottie
        className="lottie-container basic"
        config={{
          animationData: loading,
          loop: true,
          autoplay: true,
        }}
      />
    </AnimationContainer>
  );
}

export function Success() {
  return (
    <AnimationContainer>
      <Lottie
        className="lottie-container basic"
        config={{
          animationData: success,
          loop: true,
          autoplay: true,
        }}
      />
    </AnimationContainer>
  );
}

export function Error() {
  return (
    <AnimationContainer>
      <Lottie
        className="lottie-container basic"
        config={{
          animationData: error,
          loop: true,
          autoplay: true,
        }}
      />
    </AnimationContainer>
  );
}
