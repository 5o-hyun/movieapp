import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useScrollPosition from '@lib/hooks/useScrollPosition';
import useWindowSize from '@lib/hooks/useWindowSize';

import logo from '@assets/img/logo.png';
import logoNonText from '@assets/img/logoNonText.png';

const Header = () => {
  const windowScroll = useScrollPosition();
  const { responsive } = useWindowSize();

  return (
    <>
      <Container className={windowScroll > 100 && 'backgroundColor'}>
        <div className="headerWrapper">
          <Link to="/">
            <h1>
              <span className="blind">movieapp</span>
              <img
                src={responsive !== 'desktop' ? `${logoNonText}` : `${logo}`}
                alt="logo"
              />
            </h1>
          </Link>
          <div className="creditInfo">
            <p>&copy; 2023 sohyun all rights reserved</p>
          </div>
        </div>
      </Container>
    </>
  );
};
const Container = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  z-index: 91;
  &.backgroundColor {
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media ${({ theme }) => theme.devices.tablet} {
    height: 8rem;
    padding: 0 ${({ theme }) => theme.spacing.bigLarge};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 6rem;
    padding: 0 ${({ theme }) => theme.spacing.base};
  }
  .headerWrapper {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${({ theme }) => theme.devices.tablet} {
      width: 100%;
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
    .creditInfo {
      text-align: end;
      p {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Header;
