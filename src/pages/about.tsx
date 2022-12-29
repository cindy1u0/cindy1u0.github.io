import React from 'react';
import Headshot from '../images/me.jpeg';
import styled from 'styled-components';

const Wrapper = styled.section`
  box-sizing: border-box;
  height: 100vh;
  padding-top: 5%;
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
  width: 260px;
`;

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  // 280px being the line length + padding
  padding: 3rem 280px;
`;

const BodyText = styled.p`
  font-size: 16px;
  margin-right: 20px;
`;

const ResumeLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
  :hover {
    font-weight: 600;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  border-radius: 10px;
  height: 300px;
`;

const About = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <NumberText>02.</NumberText>
          <HorizontalLine />
        </TitleContainer>
        <TitleText>About</TitleText>
      </Container>
      <BodyContainer>
        <BodyText>
          Hi! My name is Cindy, and I am a Boston-based software engineer. I
          graduated with a major in Computer Science from Northeastern
          University. I enjoy building impactful software that benefits others.
          <br></br>
          <br></br>
          As a Computer Science student, I have developed strong problem solving
          skills at Northeastern. In order to explore more, I joined some tech
          organizations to improve my programming skills in Typescript, Python,
          Java, etc.
          <br></br>
          <br></br>I am passionate about music. In my free time, I like to sing,
          dance, play instruments, such as piano and ukulele. In addition to
          music, I am also interested in digital art and photography, which
          helps me capture the beauty in everyday life.<br></br>
          <br></br>
          <ResumeLink
            href={
              'https://drive.google.com/file/d/1i3OZEhMT_MxLt4uaD8BrDvuv74DnjEF9/view?usp=sharing'
            }
            target="_blank"
          >
            View my resume {`->`}
          </ResumeLink>
        </BodyText>
        <ImageWrapper src={Headshot} />
      </BodyContainer>
    </Wrapper>
  );
};

export default About;
