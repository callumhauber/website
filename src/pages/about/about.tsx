import styled from '@emotion/styled';
import { Breadcrumb } from '@website/ui';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function About(props: AboutProps) {
  return (
    <>
      <Breadcrumb />
    </>
  );
}

export default About;
