import styled from '@emotion/styled';
import { Button } from '@website/ui';
import { Routes, Route } from 'react-router-dom';

import { About } from '../pages';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <StyledApp>
            <NxWelcome title="website" />
          </StyledApp>
        }
      />
      <Route path="/test" element={<Button nav="/about" text="ABOUT" />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
