import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import StatPage from './components/pages/StatPage';
import Layout from './components/Layout';
import TaskPage from './components/pages/TaskPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <TaskPage /> },
        { path: '/stat', element: <StatPage /> },

        // { path: '/auth', element: <AuthPage /> },
        // { path: '/login', element: <LoginPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
