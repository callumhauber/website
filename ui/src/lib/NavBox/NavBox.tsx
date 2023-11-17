import styled from '@emotion/styled';
import React from 'react';

/* eslint-disable-next-line */
export interface NavBoxProps {
  children: React.ReactNode;
}

const StyledNavBox = styled.div`
  align-content: center;
  text-align: center;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export function NavBox({ children }: NavBoxProps) {
  return <StyledNavBox>{children}</StyledNavBox>;
}

export default NavBox;
