import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

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
      <Route path="/about" element={<h2>test</h2>} />
    </Routes>
  );
}

export default App;
