import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavBox, SweepButton, FlexCenter, HomeFooter } from '@website/ui';

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

export function Home(props: MainProps) {
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
        <SweepButton text="ABOUT" nav="/about" />
        <SweepButton text="BLOG" link="https://www.tumblr.com/anchoviedraws" />
        <SweepButton text="COMMISSIONS" nav="/commissions" />
        <SweepButton text="PROJECTS" nav="/projects" isNewTag />
        <SweepButton text="GALLERY" link="https://www.weasyl.com/~anchoviedraws" />
        <SweepButton text="SHOP" link="https://www.redbubble.com/people/anchoviedraws/" />
        <SweepButton text="FWENDS" nav="/fwends" />
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
            href="/rss.xml"
          >
            <span role="img" aria-label="satellite dish">
              📡 RSS
            </span>
          </a>
        </StyledP>
      </NavBox>
      <HomeFooter />
    </StyledMain>
  );
}

export default Home;
