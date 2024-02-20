import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

import { backgroundXTile } from '../../assets';

/* eslint-disable-next-line */
export interface ProjectsProps {}

const StyledProjects = styled.div``;

export function Projects(props: ProjectsProps) {
  return (
    <StyledProjects>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundXTile});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="projects" subheading="where non-art activities live" />
    </StyledProjects>
  );
}

export default Projects;
