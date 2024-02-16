import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PageHeaderProps {
  heading: string;
  subheading: string;
}

const StyledPageHeader = styled.div`
  margin-left: 2em;
  max-width: 100%;
  text-align: left;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  h1 {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 36pt;
  }

  h2 {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 18pt;
  }
`;

export function PageHeader({ heading, subheading }: PageHeaderProps) {
  return (
    <StyledPageHeader>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
    </StyledPageHeader>
  );
}

export default PageHeader;
