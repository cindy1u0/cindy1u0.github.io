import React from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/experienceCard';

const Wrapper = styled.section`
  height: 100vh;
`;

const Experience = (): JSX.Element => {
  return (
    <Wrapper>
      <ExperienceCard />
    </Wrapper>
  );
};

export default Experience;
