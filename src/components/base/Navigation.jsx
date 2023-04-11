import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { navigationMenus } from '@lib/data/data';

const Navigation = () => {
  const location = useLocation();

  const [url, setUrl] = useState(location.pathname.substring(0, 12));

  useEffect(() => {
    if (url.endsWith('/')) {
      if (url === '/') return undefined;
      setUrl(url.slice(0, -1));
    }
  }, [url]);

  return (
    <Container>
      <h2 className="blind">주요서비스</h2>
      <ul className="menuWrapper">
        {navigationMenus.map((tab) => (
          <li
            key={tab.id}
            className={url === tab.link ? 'active menu' : 'menu'}
          >
            <Link to={tab.link}>
              {tab.icon}
              <p>{tab.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
const Container = styled.nav`
  z-index: 91;
  width: 100%;
  height: 10rem;
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  @media ${({ theme }) => theme.devices.tablet} {
    height: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 6rem;
    padding: 0 ${({ theme }) => theme.spacing.minute};
  }
  .menuWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menu {
      &.active {
        color: ${({ theme }) => theme.colors.subColor};
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        @media ${({ theme }) => theme.devices.mobile} {
          gap: 0.8rem;
        }
        svg {
          width: 2.6rem;
          height: 2.6rem;
          @media ${({ theme }) => theme.devices.mobile} {
            width: 2.2rem;
            height: 2.2rem;
          }
        }
        p {
          text-transform: uppercase;
          font-size: 1.6rem;
          @media ${({ theme }) => theme.devices.tablet} {
            font-size: 1.4rem;
          }
          @media ${({ theme }) => theme.devices.mobile} {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default Navigation;
