import React from 'react';
import styled from 'styled-components';

interface StyledProp {
  isCurrent: boolean;
}

const Wrapper = styled.div`
  display: flex;
  max-width: max-content;
`;

const Circle = styled.div<StyledProp>`
  display: flex;
  background: ${(props) => (props.isCurrent ? '#000' : 'none')};
  border: 1px #000 solid;
  border-radius: 50%;
  height: 19px;
  width: 19px;
`;

const LocationText = styled.span<StyledProp>`
  cursor: pointer;
  color: ${(props) => (props.isCurrent ? '#000' : 'transparent')};
  font-size: 16px;
  font-style: italic;
  margin-right: 16px;
  text-transform: capitalize;
  transition: color 250ms;

  :hover {
    color: #000;
    text-decoration: underline;
    transition: color 250ms;
  }
`;

interface MenuLinkProps {
  anchor: string;
  location: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ anchor, location }) => {
  return (
    <Wrapper>
      <LocationText isCurrent={anchor === location}>{location}</LocationText>
      <Circle isCurrent={anchor === location} />
    </Wrapper>
  );
};

export default MenuLink;
