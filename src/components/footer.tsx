import React from 'react';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';
import SocialIconGroup from './socialIconGroup';

const Wrapper = styled.div`
  background-color: #000;
  box-sizing: border-box;
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  height: 200px;
  padding: 60px;
`;

const ContactContainer = styled.div`
  align-self: center;
`;

const ContactText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const CreditContainer = styled.div`
  align-self: center;
`;

const CreditText = styled.p`
  font-size: 16px;
`;

const BackToTopContainer = styled.div`
  align-self: center;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 48px;
  width: 160px;

  :hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

const BackToTopText = styled.p`
  font-size: 16px;
  text-align: center;
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <ContactContainer>
        <ContactText>Let&#39;s get in touch!</ContactText>
        <SocialIconGroup color={'#fff'} />
      </ContactContainer>
      <CreditContainer>
        <CreditText>Made with ♥ by Cindy</CreditText>
        <CreditText>Designed by Elaine Zhang</CreditText>
      </CreditContainer>
      <BackToTopContainer onClick={() => animateScroll.scrollToTop()}>
        <BackToTopText>Back to Top ↑</BackToTopText>
      </BackToTopContainer>
    </Wrapper>
  );
};

export default Footer;
