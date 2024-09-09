import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';

import { About, Home, Commissions, Projects, Fwends, Meowmixes } from './pages';

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
        path: 'about',
        element: <About />,
        handle: {
          crumb: () => {
            return { link: <StyledLink to="/about">about</StyledLink>, text: 'about' };
          }
        }
      },
      {
        path: 'commissions',
        element: <Commissions />,
        handle: {
          crumb: () => {
            return {
              link: <StyledLink to="/commissions">commissions</StyledLink>,
              text: 'commissions'
            };
          }
        }
      },
      {
        path: 'projects',
        element: <Outlet />,
        handle: {
          crumb: () => {
            return { link: <StyledLink to="/projects">projects</StyledLink>, text: 'projects' };
          }
        },
        children: [
          {
            index: true,
            element: <Projects />
          },
          {
            path: 'meowmixes',
            element: <Meowmixes />,
            handle: {
              crumb: () => {
                return {
                  link: <StyledLink to="/projects/meowmixes">meowmixes</StyledLink>,
                  text: 'meowmixes'
                };
              }
            }
          }
        ]
      },
      {
        path: 'fwends',
        element: <Fwends />,
        handle: {
          crumb: () => {
            return { link: <StyledLink to="/fwends">fwends</StyledLink>, text: 'fwends' };
          }
        }
      }
    ],
    handle: {
      crumb: () => {
        return { link: <StyledLink to="/">home</StyledLink>, text: 'home' };
      }
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
          background-color: #303030;
        }

        p {
          color: #ffffff;
          font-family: monospace;
          font-size: 14pt;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }
      `}
    />
  </StrictMode>
);
