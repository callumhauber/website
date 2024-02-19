import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HomeFooterProps {
  children: React.ReactNode;
  href: string;
}

const StyledHomeFooterCard = styled.a`
  border: none;
  text-decoration: none;

  &:hover,
  &:visited {
    border: none;
    text-decoration: none;
  }
`;

export function HomeFooterBadge({ children, href }: HomeFooterProps) {
  return (
    <StyledHomeFooterCard target="_blank" href={href}>
      {children}
    </StyledHomeFooterCard>
  );
}

export default HomeFooterBadge;
