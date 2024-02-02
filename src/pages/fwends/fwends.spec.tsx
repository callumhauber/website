import { render } from '@testing-library/react';

import Fwends from './fwends';

describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fwends />);
    expect(baseElement).toBeTruthy();
  });
});
