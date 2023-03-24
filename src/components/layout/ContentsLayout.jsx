import React from 'react';
import styled from 'styled-components';

const ContentsLayout = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0 ${({ theme }) => theme.spacing.base};
  }
`;

export default ContentsLayout;
