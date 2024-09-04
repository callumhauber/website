import { render } from '@testing-library/react';

import Meowmixes from './meowmixes';

describe('Meowmixes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meowmixes />);
    expect(baseElement).toBeTruthy();
  });
});
