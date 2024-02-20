import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ResponsiveContainerProps {
  children: React.ReactNode;
}

const StyledResponsiveContainer = styled.div`
  margin: auto;
  max-width: 60em;
  padding-bottom: 4em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  return <StyledResponsiveContainer>{children}</StyledResponsiveContainer>;
}

export default ResponsiveContainer;
