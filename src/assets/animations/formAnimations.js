import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import loading from './lottieAnimations/form-loading.json';
import success from './lottieAnimations/success.json';
import error from './lottieAnimations/error.json';

const AnimationContainer = styled.div`
  --size: 32px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  margin: 16px 0 16px 0;
  transition: transform 0.5s ease-in-out;

  .animation{
    pointer-events: none;
  }
`;

export function Loading() {
  return (
    <AnimationContainer>
      <div className="animation">
        <Lottie
          className="lottie-container basic"
          width={100}
          height={100}
          config={{
            animationData: loading,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </AnimationContainer>
  );
}

export function Success() {
  return (
    <AnimationContainer>
      <div className="animation">
        <Lottie
          className="lottie-container basic"
          width={200}
          height={200}
          config={{
            animationData: success,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </AnimationContainer>
  );
}

export function Error() {
  return (
    <AnimationContainer>
      <div className="animation">
        <Lottie
          className="lottie-container basic"
          width={200}
          height={200}
          config={{
            animationData: error,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </AnimationContainer>
  );
}
