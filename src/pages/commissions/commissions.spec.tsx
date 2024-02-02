import { render } from '@testing-library/react';

import Commissions from './commissions';

describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Commissions />);
    expect(baseElement).toBeTruthy();
  });
});
