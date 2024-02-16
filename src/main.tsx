import { Global, css } from '@emotion/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { background } from './assets';
import { About, Home, Commissions, Projects, Fwends } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/commissions', element: <Commissions /> },
  { path: '/projects', element: <Projects /> },
  { path: '/fwends', element: <Fwends /> }
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
          background-image: url(${background});
          background-size: auto;
          background-repeat: repeat;
        }
      `}
    />
  </StrictMode>
);
