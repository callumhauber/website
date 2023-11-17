import { render } from '@testing-library/react';

import NavBox from './NavBox';

describe('NavBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavBox />);
    expect(baseElement).toBeTruthy();
  });
});
