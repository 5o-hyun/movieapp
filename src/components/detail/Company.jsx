import React from 'react';
import styled from 'styled-components';

const Company = ({ companies }) => {
  console.log(companies);
  return (
    <Container>
      <p className="title">제작협찬 ({companies.length})</p>
      <ul className="companiesContainer">
        {companies.map((company) => (
          <li className="companiesLogo" key={company.id}>
            {company.logo_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500` + company.logo_path}
                alt={company.name}
              />
            ) : (
              <span>{company.name}</span>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding-bottom: ${({ theme }) => theme.spacing.smallMedium};
  }
  .title {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.base};
    padding-bottom: ${({ theme }) => theme.spacing.base};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  }
  ul.companiesContainer {
    display: flex;
    gap: ${({ theme }) => theme.spacing.tiny};
    li {
      width: 8rem;
      height: 3.4rem;
      background-color: ${({ theme }) => theme.colors.gray[700]};
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
    }
  }
`;

export default Company;
