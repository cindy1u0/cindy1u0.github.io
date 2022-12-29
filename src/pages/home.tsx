import React from 'react';
import styled from 'styled-components';
import TopScroll from '../components/topScroll';

const Wrapper = styled.section`
  box-sizing: border-box;
  height: 100vh;
  padding: 18% 10%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.span`
  font-size: 24px;
`;

const NameText = styled.span`
  font-size: 128px;
  font-weight: 600;
`;

const PositionGroup = styled.div`
  display: flex;
  margin-top: 16px;
`;

const PositionContainer = styled.div`
  border: 1px #000 solid;
  border-radius: 50px;
  font-size: 20px;
  margin-right: 16px;
  padding: 10px 40px;
`;

const Home = (): JSX.Element => {
  const positions: string[] = ['Developer', 'Photographer', 'Musician'];
  return (
    <Wrapper>
      <TopScroll />
      <Container>
        <TitleText>Hello! My name is</TitleText>
        <NameText>Cindy Luo</NameText>
        <PositionGroup>
          {positions.map((pos: string, idx: number) => {
            return <PositionContainer key={idx}>{pos}</PositionContainer>;
          })}
        </PositionGroup>
      </Container>
    </Wrapper>
  );
};

export default Home;
