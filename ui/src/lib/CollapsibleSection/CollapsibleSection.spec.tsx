import { render } from '@testing-library/react';

import CollapsibleSection from './CollapsibleSection';

describe('CollapsibleSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CollapsibleSection />);
    expect(baseElement).toBeTruthy();
  });
});
