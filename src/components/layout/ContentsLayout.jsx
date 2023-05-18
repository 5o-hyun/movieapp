import React from 'react';
import styled from 'styled-components';

const ContentsLayout = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.devices.tablet} {
    width: auto;
    padding: 0 ${({ theme }) => theme.spacing.bigLarge};
    margin-bottom: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.base};
    margin-bottom: 6rem;
  }
`;

export default ContentsLayout;
