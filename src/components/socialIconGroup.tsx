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

const StyledLink = styled.a`
  color: unset;
  cursor: pointer;
  margin-right: 16px;
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

interface SocialIconGroupProp {
  color: string;
}

const SocialIconGroup: React.FC<SocialIconGroupProp> = ({ color }) => {
  return (
    <>
      {socialMedia.map((info, idx: number) => {
        return (
          <StyledLink key={idx} href={info.link} target="_blank">
            <FontAwesomeIcon icon={info.icon} size={'2x'} color={color} />
          </StyledLink>
        );
      })}
    </>
  );
};

export default SocialIconGroup;
