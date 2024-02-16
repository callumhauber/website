import { render } from '@testing-library/react';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageHeader heading="test heading" subheading="test subheading" />
    );
    expect(baseElement).toBeTruthy();
  });
});
