import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { tabMenus } from '@lib/data/data';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(0);
  const menuActiveHandler = (id) => {
    setMenuActive(id);
  };

  return (
    <Container>
      <h2 className="blind">주요서비스</h2>
      <ul className="menuWrapper">
        {tabMenus.map((tab) => (
          <li
            key={tab.id}
            onClick={() => menuActiveHandler(tab.id)}
            className={menuActive === tab.id ? 'active menu' : 'menu'}
          >
            <Link>
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