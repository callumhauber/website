import { render } from '@testing-library/react';

import SweepButton from './SweepButton';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SweepButton />);
    expect(baseElement).toBeTruthy();
  });
});
