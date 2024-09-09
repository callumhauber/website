import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Breadcrumb,
  FriendCard,
  FriendCardSet,
  PageHeader,
  ResponsiveContainer,
  Section
} from '@website/ui';

import { backgroundHappy, hecate, luka, me, west, wolfizen } from '../../assets';

/* eslint-disable-next-line */
export interface FwendsProps {}

const StyledFwends = styled.div``;

export function Fwends(props: FwendsProps) {
  return (
    <StyledFwends>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundHappy});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="fwends!!" subheading="folks you should know about" />
      <ResponsiveContainer css={{ margin: '2em auto auto' }}>
        <FriendCardSet>
          <FriendCard link="https://anchovie.art" image={me} text="ANCHOVIE" here />
          <FriendCard link="https://trippster890.tumblr.com" image={luka} text="LUKA" />
          <FriendCard link="https://hecate.space" image={hecate} text="HECATE" />
          <FriendCard link="https://wolfizen.net" image={wolfizen} text="WOLFIZEN" />
          <FriendCard link="https://deers.io" image={west} text="WEST" />
        </FriendCardSet>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <Section>
          <p>more coming soon!</p>
          <p>
            <strong>notice to visitors:</strong> due to hover animations, this page is best viewed
            on desktop. i tried my best to make the cards responsive for usability, but you'll
            definitely miss out on the full experience.
          </p>
          <p>
            <strong>notice to fwends:</strong> if you don't see yourself listed here and we know
            each other, hit me up with a url, some card art, and i'll get you added in a jiffy :3.
            also, please feel free to steal this page's code and/or link back to me! let's grow the
            webring.
          </p>
        </Section>
      </ResponsiveContainer>
    </StyledFwends>
  );
}

export default Fwends;
