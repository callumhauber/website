import styled from '@emotion/styled';
import { Breadcrumb } from '@website/ui';

/* eslint-disable-next-line */
export interface CommissionsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Commissions(props: CommissionsProps) {
  return (
    <>
      <Breadcrumb />
    </>
  );
}

export default Commissions;
