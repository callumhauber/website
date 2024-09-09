import { render } from '@testing-library/react';

import FriendCard from './FriendCard';

describe('FriendCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FriendCard />);
    expect(baseElement).toBeTruthy();
  });
});
