// import styled from '@emotion/styled';
import { SweepButton } from '@website/ui';
import { Routes, Route } from 'react-router-dom';

import { About, Main } from '../pages';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/test"
        element={<SweepButton nav="/about" text="hello lam" />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
