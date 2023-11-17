import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FlexCenterProps {
  children: React.ReactNode;
}

const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export function FlexCenter({ children }: FlexCenterProps) {
  return <StyledFlexCenter>{children}</StyledFlexCenter>;
}

export default FlexCenter;
