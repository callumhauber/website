import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

/* eslint-disable-next-line */
export interface CommissionsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Commissions(props: CommissionsProps) {
  return (
    <>
      <Breadcrumb />
      <PageHeader heading="commissions" subheading="so, you want to give me money..." />
    </>
  );
}

export default Commissions;
