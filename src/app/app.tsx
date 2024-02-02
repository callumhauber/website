// import styled from '@emotion/styled';
import { SweepButton } from '@website/ui';
import { Routes, Route } from 'react-router-dom';

import { About, Main, Commissions, Projects, Fwends } from '../pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/test"
        element={<SweepButton nav="/about" text="hello lam" />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/commissions" element={<Commissions />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/fwends" element={<Fwends />} />
    </Routes>
  );
}

export default App;
