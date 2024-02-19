import styled from '@emotion/styled';
import { css } from '@emotion/react';

/* eslint-disable-next-line */
export interface HomeFooterProps {
  children: React.ReactNode;
  href?: string;
  rel?: string;
}

const StyledBadgeLink = styled.a`
  border: none;
  text-decoration: none;
  padding: 0px 2px;

  &:hover,
  &:visited {
    border: none;
    text-decoration: none;
  }
`;

export function HomeFooterBadge({ children, href, rel = 'noreferrer' }: HomeFooterProps) {
  if (href) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <StyledBadgeLink target="_blank" rel={rel} href={href}>
        {children}
      </StyledBadgeLink>
    );
  } else {
    return (
      <span
        css={css`
          padding: 0px 2px;
        `}
      >
        {children}
      </span>
    );
  }
}

export default HomeFooterBadge;
