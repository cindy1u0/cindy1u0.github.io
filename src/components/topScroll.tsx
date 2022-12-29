import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  align-items: center;
  border: 1px #000 solid;
  box-sizing: border-box;
  display: flex;
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const scrollAnimation = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;

const StyledText = styled.span`
  animation: ${scrollAnimation} 20s linear infinite;
  font-weight: 600;

  :hover {
    animation-play-state: paused;
  }
`;

const TopScroll = (): JSX.Element => {
  return (
    <Container>
      <StyledText>
        HII :D WELCOME TO MY WEBSITE! NICE TO MEET YOU! &nbsp;&nbsp;&nbsp;&nbsp;
        你好 :D 欢迎来到我的网站！很高兴认识你！&nbsp;&nbsp;&nbsp;&nbsp;
        こんにちは :D はじめまして！ウェブサイトにようこそ！
      </StyledText>
    </Container>
  );
};

export default TopScroll;
