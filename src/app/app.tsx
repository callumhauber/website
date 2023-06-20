import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';

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
      <Route path="/about" element={<span>test</span>} />
    </Routes>
  );
}

export default App;
