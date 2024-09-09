import styled from '@emotion/styled';

export interface FriendCardSetProps {
  children: React.ReactNode;
}

const StyledFriendCardSet = styled.div`
  width: 100%;
  max-width: 60em;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10em);
  justify-content: center;
  grid-gap: 2em;
`;

export function FriendCardSet({ children }: FriendCardSetProps) {
  return <StyledFriendCardSet>{children}</StyledFriendCardSet>;
}

export default FriendCardSet;
