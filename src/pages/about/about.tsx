import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

import { backgroundFishy2 } from '../../assets';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div``;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundFishy2});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="about" subheading="me, my site, and my silly little hobbies" />
    </StyledAbout>
  );
}

export default About;
