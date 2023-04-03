import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorPage from '@pages/ErrorPage';
import Root from '@pages/index';
import MoviePage from '@pages/movie';

import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/list/movie',
      element: <MoviePage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
