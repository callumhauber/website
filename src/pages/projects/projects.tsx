import styled from '@emotion/styled';
import { Breadcrumb } from '@website/ui';

/* eslint-disable-next-line */
export interface ProjectsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Projects(props: ProjectsProps) {
  return (
    <>
      <Breadcrumb />
    </>
  );
}

export default Projects;
