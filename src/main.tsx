import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Plans from './pages/plans';
import Resume from './pages/resume';
import './index.scss';
import { UserProvider } from './contexts/UserContext/Context';
import { PlansProvider } from './contexts/PlansContext/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/plans',
    element: <Plans />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <PlansProvider>
        <RouterProvider router={router} />
      </PlansProvider>
    </UserProvider>
  </React.StrictMode>
);
