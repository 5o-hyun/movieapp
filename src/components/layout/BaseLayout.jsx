import React from 'react';
import styled from 'styled-components';

import Header from '@components/common/Header';
import Navigation from '@components/common/Navigation';

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
