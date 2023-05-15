import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Like = ({ count, props }) => {
  return (
    <Container {...props}>
      <AiOutlineHeart />
      <p className="number">{count}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.microTiny};
  font-size: 1.4rem;
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: 1.2rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
    @media ${({ theme }) => theme.devices.mobile} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export default Like;
