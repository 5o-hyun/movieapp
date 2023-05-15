import React from 'react';
import { MdDateRange } from 'react-icons/md';
import styled from 'styled-components';

const Date = ({ date, props }) => {
  return (
    <Container {...props}>
      <MdDateRange />
      <p className="date">{date}</p>
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
export default Date;
