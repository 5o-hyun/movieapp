import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useScrollPosition from '@lib/hooks/useScrollPosition';
import useWindowSize from '@lib/hooks/useWindowSize';

const Header = () => {
  const windowScroll = useScrollPosition();
  const { responsive } = useWindowSize();

  return (
    <>
      <Container className={windowScroll > 100 && 'backgroundColor'}>
        <Link to="/">
          <h1>
            <span className="blind">movieapp</span>
            <img
              src={
                responsive !== 'desktop'
                  ? 'img/png/logoNonText.png'
                  : 'img/png/logo.png'
              }
              alt="logo"
            />
          </h1>
        </Link>
        <AiOutlineMenu />
      </Container>
    </>
  );
};
const Container = styled.header`
  width: 100%;
  height: 10rem;
  padding: 0 ${({ theme }) => theme.spacing.bigLarge};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 91;
  &.backgroundColor {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media ${({ theme }) => theme.devices.tablet} {
    height: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 6rem;
    padding: 0 ${({ theme }) => theme.spacing.base};
  }
  h1 {
    height: 8rem;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.devices.tablet} {
      height: 6rem;
    }
    @media ${({ theme }) => theme.devices.mobile} {
      height: 5rem;
    }
    img {
      height: 80%;
    }
  }
  svg {
    width: 3.4rem;
    height: 3.4rem;
    cursor: pointer;
    @media ${({ theme }) => theme.devices.tablet} {
      height: 3rem;
    }
    @media ${({ theme }) => theme.devices.mobile} {
      height: 2.6rem;
    }
  }
`;

export default Header;
