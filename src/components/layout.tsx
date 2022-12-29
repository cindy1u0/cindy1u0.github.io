import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import MenuLink from './menuLink';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const LinkGroup = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 60px;
  top: 40%;

  div {
    margin-bottom: 16px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [anchor, setAnchor] = useState<string>('');
  const menuList: string[] = [
    'home',
    'about',
    'experience',
    'projects',
    'photography',
  ];
  return (
    <Wrapper>
      <LinkGroup>
        {menuList.map((section: string, idx: number) => {
          return (
            <Link
              key={idx}
              to={section}
              smooth
              hashSpy
              spy
              onSetActive={(to: string, _e) => setAnchor(to)}
            >
              <MenuLink location={section} anchor={anchor} />
            </Link>
          );
        })}
      </LinkGroup>
      {children}
    </Wrapper>
  );
};

export default Layout;
