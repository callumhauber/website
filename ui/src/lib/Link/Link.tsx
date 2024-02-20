import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LinkProps {
  href: string;
  rel?: string;
  children: React.ReactNode;
  spacing?: 'left' | 'right' | 'around' | 'none';
}

const StyledLink = styled.a`
  color: #e9b05c;

  &:hover {
    border-bottom: 1px solid;
  }

  &:visited {
    color: #e9b05c;
  }
`;

export function Link({ href, rel = 'noreferrer', spacing = 'around', children }: LinkProps) {
  const space = <span>&nbsp;</span>;

  return (
    <>
      {(spacing === 'around' || spacing === 'left') && space}
      <StyledLink href={href} target="_blank" rel={rel}>
        {children}
      </StyledLink>
      {(spacing === 'around' || spacing === 'right') && space}
    </>
  );
}

export default Link;
