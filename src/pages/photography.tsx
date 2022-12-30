import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import { PHOTOS } from '../utils/photoList';

const Wrapper = styled.section`
  margin-bottom: 10%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12%;
`;

const TitleText = styled.h1`
  font-size: 84px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 120px;
  position: absolute;
`;

const NumberText = styled.span`
  font-size: 16px;
  right: 0;
  position: absolute;
  top: -25px;
`;

const HorizontalLine = styled.span`
  border-top: 1px #000 solid;
  width: 200px;
`;

const Photography = (): JSX.Element => {
  return (
    <Wrapper>
      <TitleContainer>
        <NumberText>05.</NumberText>
        <HorizontalLine />
      </TitleContainer>
      <Container>
        <TitleText>Photography</TitleText>
        <Gallery photos={PHOTOS} />
      </Container>
    </Wrapper>
  );
};

export default Photography;
