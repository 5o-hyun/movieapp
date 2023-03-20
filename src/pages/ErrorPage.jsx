import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <p className="title">oops!</p>
      <p className="desc">Sorry, an unexpected error has occurred.</p>
      <p className="errorMessage">
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
};
const Container = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p.title {
    text-transform: capitalize;
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  p.desc {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  p.errorMessage {
    font-size: 2rem;
  }
`;

export default ErrorPage;
