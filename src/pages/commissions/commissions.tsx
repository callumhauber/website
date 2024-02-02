import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommissionsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Commissions(props: CommissionsProps) {
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
    </StyledAbout>
  );
}

export default Commissions;
