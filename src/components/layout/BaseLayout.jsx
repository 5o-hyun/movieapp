import React from 'react';
import styled from 'styled-components';

import Header from '@components/base/Header';
import Navigation from '@components/base/Navigation';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main role="main">{children}</Main>
      <Navigation />
    </>
  );
};
const Main = styled.main``;

export default BaseLayout;
