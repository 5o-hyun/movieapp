import React from 'react';
import styled from 'styled-components';

const ContentsLayout = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.bigLarge};
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.devices.tablet} {
    margin-bottom: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.base};
    margin-bottom: 6rem;
  }
`;

export default ContentsLayout;
