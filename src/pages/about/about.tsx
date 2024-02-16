import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function About(props: AboutProps) {
  return (
    <>
      <Breadcrumb />
      <PageHeader heading="about" subheading="me, my site, and my silly little hobbies" />
    </>
  );
}

export default About;
