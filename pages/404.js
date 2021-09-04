import React from 'react';
import { Lottie } from '@crello/react-lottie';
import styled from 'styled-components';
import NextLink from 'next/link';
import error from '../src/assets/animations/lottieAnimations/error-404.json';

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  border: 0;
  padding: 0;
  outline: 0;
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.secondary.color};
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  font-size: 32px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;

  a { 
    color: ${({ theme }) => theme.secondary.contrastText};
    text-decoration: none;
  }
  
  &:hover {
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
  }
`;

export default function ErrorPage() {
  return (
    <AnimationContainer>
      <div className="animation">
        <Lottie
          className="lottie-container basic"
          config={{
            animationData: error,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
      <Button>
        <NextLink href="/">
          Voltar a página inicial
        </NextLink>

      </Button>
    </AnimationContainer>
  );
}

// export default websitePageHOC(Home, {
//   pageWrapperProps: {
//     seoProps: {
//       headTitle: 'Error',
//     },
//   },
// });
