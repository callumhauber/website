import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

/* eslint-disable-next-line */
export interface ProjectsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Projects(props: ProjectsProps) {
  return (
    <>
      <Breadcrumb />
      <PageHeader heading="projects" subheading="where non-art activities live" />
    </>
  );
}

export default Projects;
