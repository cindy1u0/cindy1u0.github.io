import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import { PHOTOS } from '../utils/photoList';

const Wrapper = styled.section`
  margin-bottom: 10%;
`;

const Container = styled.div`
  display: flex;
`;

const TitleText = styled.h1`
  font-size: 84px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: auto 20px auto 0;
  position: relative;
`;

const NumberText = styled.span`
  font-size: 16px;
  right: 0;
  position: absolute;
  top: -25px;
`;

const HorizontalLine = styled.span`
  border-top: 1px #000 solid;
  width: 300px;
`;

const GalleryContainer = styled.div`
  padding: 3% 15%;
`;

const Photography = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <NumberText>05.</NumberText>
          <HorizontalLine />
        </TitleContainer>
        <TitleText>Photography</TitleText>
      </Container>
      <GalleryContainer>
        <Gallery photos={PHOTOS} />
      </GalleryContainer>
    </Wrapper>
  );
};

export default Photography;
