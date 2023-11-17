import { Global, css } from '@emotion/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { background } from './assets';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
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
    </BrowserRouter>
  </StrictMode>
);
