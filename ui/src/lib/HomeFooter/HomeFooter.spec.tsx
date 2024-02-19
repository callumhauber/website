import { render } from '@testing-library/react';

import HomeFooter from './HomeFooter';

describe('HomeFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFooter />);
    expect(baseElement).toBeTruthy();
  });
});
