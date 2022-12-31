import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px #000 solid;
  width: 320px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 24px;
`;

const RoleText = styled.span`
  line-height: 20px;
`;

const TimeText = styled.span`
  color: #666;
`;

const BodyText = styled.span`
  margin-top: 16px;
`;

const TechGroupContainer = styled.div`
  display: flex;
  margin-top: 16px;

  div {
    margin-right: 10px;
  }
`;

const TechContainer = styled.div`
  align-self: center;
  border: 1px #666 solid;
  border-radius: 50px;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 5px 10px;
`;

const TechText = styled.span`
  color: #666;
  font-size: 14px;
`;

const ExperienceCard = (): JSX.Element => {
  return (
    <Container>
      <DescriptionContainer>
        <RoleText>
          SWE Intern @ <strong>Company</strong>
        </RoleText>
        <TimeText>MMM 20xx - MMM 20xx</TimeText>
        <BodyText>
          yes ive been doing this yes ive been doing this yes ive been doing
          this yes ive been doing this yes ive been doing this
        </BodyText>
        <TechGroupContainer>
          <TechContainer>
            <TechText>Typescript</TechText>
          </TechContainer>
          <TechContainer>
            <TechText>Javascript</TechText>
          </TechContainer>
        </TechGroupContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default ExperienceCard;
