import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlickr,
  faGithub,
  faInstagram,
  faLinkedinIn,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 20%;
  right: 10%;

  a {
    margin-right: 16px;
  }
`;

const NumberText = styled.span`
  font-size: 16px;
  left: 20px;
  position: absolute;
  top: -10px;
`;

const HorizontalLine = styled.span`
  border-top: 1px #000 solid;
  margin: auto 20px;
  width: 150px;
`;

const StyledText = styled.span`
  align-self: center;
  font-size: 16px;
  margin-right: 20px;
`;

const StyledLink = styled.a`
  color: unset;
  cursor: pointer;
`;

const socialMedia: Array<{
  name: string;
  link: string;
  icon: IconDefinition;
}> = [
  {
    name: 'github',
    link: 'https://github.com/cindy1u0',
    icon: faGithub,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/cindy1u0/',
    icon: faLinkedinIn,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/cindy1u0/',
    icon: faInstagram,
  },
  {
    name: 'flickr',
    link: 'https://www.flickr.com/photos/cindy1u0/',
    icon: faFlickr,
  },
  {
    name: 'email',
    link: 'mailto:cindyluo2015@gmail.com',
    icon: faEnvelope,
  },
];

const SocialIconGroup = (): JSX.Element => {
  return (
    <Container>
      <NumberText>01.</NumberText>
      <HorizontalLine />
      <StyledText>You can also find me on</StyledText>
      {socialMedia.map((info, idx: number) => {
        return (
          <StyledLink key={idx} href={info.link} target="_blank">
            <FontAwesomeIcon icon={info.icon} size={'2x'} />
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default SocialIconGroup;
