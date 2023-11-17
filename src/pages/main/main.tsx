import styled from '@emotion/styled';
import { NavBox, SweepButton } from '@website/ui';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div``;

export function Main(props: MainProps) {
  return (
    <NavBox>
      <SweepButton nav="/about" text="ABOUT" />
      <SweepButton nav="/blog" text="BLOG" />
      <SweepButton nav="/commissions" text="COMMISSIONS" />
      <SweepButton nav="/projects" text="PROJECTS" />
      <SweepButton nav="/gallery" text="GALLERY" />
      <SweepButton nav="/shop" text="SHOP" />
      <SweepButton nav="/fwends" text="FWENDS" />
    </NavBox>
  );
}

export default Main;
