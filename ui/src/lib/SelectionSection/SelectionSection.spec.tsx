import { render } from '@testing-library/react';

import SelectionSection from './SelectionSection';

describe('SelectionSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectionSection />);
    expect(baseElement).toBeTruthy();
  });
});
