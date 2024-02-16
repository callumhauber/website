import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

/* eslint-disable-next-line */
export interface FwendsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Fwends(props: FwendsProps) {
  return (
    <>
      <Breadcrumb />
      <PageHeader heading="fwends!!" subheading="folks you should know about" />
    </>
  );
}

export default Fwends;
