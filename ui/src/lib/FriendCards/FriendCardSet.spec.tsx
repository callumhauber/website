import { render } from '@testing-library/react';

import FriendCardSet from './FriendCardSet';

describe('FriendCardSet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FriendCardSet />);
    expect(baseElement).toBeTruthy();
  });
});
