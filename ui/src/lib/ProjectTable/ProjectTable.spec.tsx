import { render } from '@testing-library/react';

import ProjectTable from './ProjectTable';

describe('ProjectTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectTable />);
    expect(baseElement).toBeTruthy();
  });
});
