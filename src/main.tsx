import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import { About, Home, Commissions, Projects, Fwends } from './pages';

const StyledLink = styled(Link)`
  border: none;
  text-decoration: none !important;
  color: #e9b05c;

  &:hover {
    border: none;
    text-decoration: none;
  }

  &:visited {
    color: #e9b05c;
    border: none;
    text-decoration: none;
  }
`;

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
        handle: {
          crumb: () => 'about'
        }
      },
      {
        path: '/commissions',
        element: <Commissions />,
        handle: {
          crumb: () => 'commissions'
        }
      },
      {
        path: '/projects',
        element: <Projects />,
        handle: {
          crumb: () => 'projects'
        }
      },
      {
        path: '/fwends',
        element: <Fwends />,
        handle: {
          crumb: () => 'fwends'
        }
      }
    ],
    handle: {
      crumb: () => <StyledLink to="/">home</StyledLink>
    }
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    <Global
      styles={css`
        html {
          width: 100%;
          margin: auto;
        }

        body {
          width: 100%;
          margin: auto;
          background-size: auto;
          background-repeat: repeat;
        }
      `}
    />
  </StrictMode>
);
