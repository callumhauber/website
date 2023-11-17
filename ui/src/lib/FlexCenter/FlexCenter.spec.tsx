import { render } from '@testing-library/react';

import FlexCenter from './FlexCenter';

describe('FlexCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlexCenter />);
    expect(baseElement).toBeTruthy();
  });
});
