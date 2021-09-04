import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import likeAnimation from '../../../assets/animations/lottieAnimations/twitter-heart.json';

const LikeButtonWrapper = styled.button`
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
  
  &:hover {
    transform: scale(1.4);
  }

  .animation{
    pointer-events: none;
  }
`;

export default function LikeButton() {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    playingState: 'playing',
    direction: -1,
  });

  return (
    <LikeButtonWrapper
      onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setLikeState(!isLiked);
        setAnimationState({
          ...animationState,
          direction: animationState.direction === normalAnimation
            ? reverseAnimation
            : normalAnimation,
        });
      }}
    >
      <div className="animation">
        <Lottie
          className="lottie-container basic"
          width={200}
          height={200}
          playingState={animationState.playingState}
          direction={animationState.direction}
          config={{
            animationData: likeAnimation,
            loop: false,
            autoplay: false,
          }}
        />
      </div>
      {/* <span>{isLiked ? 1 : 0}</span> */}
    </LikeButtonWrapper>
  );
}
