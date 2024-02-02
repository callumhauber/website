import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProjectsProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function Projects(props: ProjectsProps) {
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
    </StyledAbout>
  );
}

export default Projects;
