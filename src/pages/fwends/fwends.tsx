import styled from '@emotion/styled';
import { Breadcrumb } from '@website/ui';

/* eslint-disable-next-line */
export interface FwendsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Fwends(props: FwendsProps) {
  return (
    <>
      <Breadcrumb />
    </>
  );
}

export default Fwends;
