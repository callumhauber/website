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

  @media screen and (max-width: 768px) {
    max-width: 85%;
  }
`;

export function NavBox({ children }: NavBoxProps) {
  return <StyledNavBox>{children}</StyledNavBox>;
}

export default NavBox;
