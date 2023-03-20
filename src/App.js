import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from '@pages/index';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
