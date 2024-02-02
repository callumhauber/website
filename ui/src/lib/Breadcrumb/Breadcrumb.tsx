import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BreadcrumbProps {}

const StyledBreadcrumb = styled.div`
  color: pink;
`;

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <StyledBreadcrumb>
      <h1>Welcome to Breadcrumb!</h1>
    </StyledBreadcrumb>
  );
}

export default Breadcrumb;
