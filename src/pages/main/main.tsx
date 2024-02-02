import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavBox, SweepButton, FlexCenter } from '@website/ui';

import { fishySquare } from '../../assets';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  padding-top: 4em;

  margin: auto;
  max-width: 60em;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  color: #ffffff;
  font-family: sans-serif;
  font-size: 18pt;
`;

const StyledP = styled.p`
  color: #ffffff;
  font-family: monospace;
  font-size: 14pt;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export function Main(props: MainProps) {
  return (
    <StyledMain>
      <NavBox>
        <FlexCenter>
          <img
            src={fishySquare}
            alt="fish icon"
            css={css`
              width: 2em;
            `}
          />
        </FlexCenter>
        <StyledH2>meowdy! i'm anchovie</StyledH2>
        <SweepButton nav="/about" text="ABOUT" />
        <SweepButton link="https://www.tumblr.com/anchoviedraws" text="BLOG" />
        <SweepButton nav="/commissions" text="COMMISSIONS" />
        <SweepButton nav="/projects" text="PROJECTS" />
        <SweepButton link="https://www.weasyl.com/~anchoviedraws" text="GALLERY" />
        <SweepButton link="https://www.redbubble.com/people/anchoviedraws/" text="SHOP" />
        <SweepButton nav="/fwends" text="FWENDS" />
        <StyledP>last updated: 10-22-2023</StyledP>
        <StyledP>
          <a
            css={css`
              border: none;
              text-decoration: none;
              color: #e9b05c;
            `}
            target="_blank"
            rel="noreferrer"
            href='/rss.xml'
          >
            <span role="img" aria-label="satellite dish">
              📡 RSS
            </span>
          </a>
        </StyledP>
      </NavBox>
    </StyledMain>
  );
}

export default Main;
