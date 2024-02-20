import { render } from '@testing-library/react';

import ResponsiveContainer from './ResponsiveContainer';

describe('ResponsiveContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResponsiveContainer />);
    expect(baseElement).toBeTruthy();
  });
});
