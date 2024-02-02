import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FwendsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Fwends(props: FwendsProps) {
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
    </StyledAbout>
  );
}

export default Fwends;
