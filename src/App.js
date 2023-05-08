import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorPage from '@pages/ErrorPage';
import DetailPage from '@pages/detail';
import GenrePage from '@pages/genre';
import Root from '@pages/index';
import TvPage from '@pages/tv';

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
      element: <GenrePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/list/movie/:movieId',
      element: <DetailPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/list/tv',
      element: <TvPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/list/tv/:tvId',
      element: <DetailPage />,
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
