import React from 'react';
import styled from 'styled-components';

const Keyword = ({ keywords, ...props }) => {
  return (
    <Container {...props}>
      {keywords.map((keyword) => (
        <li className="keyword" key={keyword.id}>
          {keyword.name}
        </li>
      ))}
    </Container>
  );
};
const Container = styled.ul`
  display: flex;
  gap: 1rem;
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.6rem;
  }
  .keyword {
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border: 1px solid ${({ theme }) => theme.colors.subColor};
    color: ${({ theme }) => theme.colors.subColor};
    padding: 0.6rem 0.8rem;
    border-radius: 1.4rem;
    @media ${({ theme }) => theme.devices.mobile} {
      font-size: 0.8rem;
    }
  }
`;

export default Keyword;
