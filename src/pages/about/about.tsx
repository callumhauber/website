import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breadcrumb, CollapsibleSection, Link, PageHeader, ResponsiveContainer } from '@website/ui';

import { backgroundFishy2, boxNoBg, anchovieRefsheet } from '../../assets';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div``;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundFishy2});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="about" subheading="me, my site, and my silly little hobbies" />
      <ResponsiveContainer>
        <CollapsibleSection buttonText="//who i am">
          <img
            src={boxNoBg}
            alt="anchovie in box"
            css={css`
              margin: auto;
              display: block;
              width: 6em;
            `}
          />
          <p>meowdy! i'm anchovie. welcome to my corner of the net.</p>
          <p>
            an inexhaustive list of <strong>things i do</strong>: art, design, cars, computers,
            rapid prototyping (3d printing, cnc, lasercutting), music, light coding, and keyboards.
          </p>
          <p>
            i've been involved in the
            <Link href="https://en.wikipedia.org/wiki/Furry_fandom">furry</Link>
            and
            <Link href="https://en.wikipedia.org/wiki/Maker_culture">maker</Link>
            communities for as long as i've had access to a computer at home. if i had to tie an age
            to my first encounter, i'd say i was about 10 years old. suffice to say,{' '}
            <strong>furries and technology have been with me for most of my life</strong>. many of
            my projects involve both; my most publicized being the now-defunct
            <Link href="https://lapfoxtrax.fandom.com/wiki/Lapfox_Trax_Remix_Sound_Team">
              Lapfox Trax Remix Sound Team
            </Link>
            (we were young and bad at music, but it was a good time). members of these communities
            have been foundational to what i do today, either directly as collaborators and mentors
            or indirectly as inspirers. i try to give back by logging my journeys publicly as those
            before me did. my hope is that someday (maybe) something i do will light a spark in
            someone who stumbles upon it.
          </p>
          <p>
            problem is, i'm generally <strong>pretty quiet in big spaces</strong>. i used to log my
            thoughts and projects on twitter, but posting there made me anxious. to suit my
            preference for smaller environments i revived my
            <Link href="https://www.tumblr.com/anchoviedraws" spacing="left">
              blog on tumblr
            </Link>
            . if you want to hear my thoughts in real-time, consider following that. if you just
            want to see the finished results, follow this website's RSS feed or bookmark my URL and
            check in every now and then :3
          </p>
          <p>
            all that being said, i love to chat with folks in smaller groups or individually. so if
            you wanna reach out - whether it's to talk shop, request a commission, show me your cool
            keyboard, or just say hi - <strong>don't be shy!</strong>
          </p>
        </CollapsibleSection>
        <CollapsibleSection buttonText="//where to find me">
          <p>
            <strong>telegram:</strong>
            <Link href="https://t.me/anchovie" spacing="left">
              @anchovie
            </Link>
          </p>
          <p>
            <strong>tg channel:</strong>
            <Link href="https://t.me/anchoviedraws" spacing="left">
              @anchoviedraws
            </Link>
          </p>
          <p>
            <strong>tumblr:</strong>
            <Link href="https://www.tumblr.com/anchoviedraws" spacing="left">
              anchoviedraws
            </Link>
          </p>
          <p>
            <strong>weasyl:</strong>
            <Link href="https://www.weasyl.com/~anchoviedraws" spacing="left">
              anchoviedraws
            </Link>
          </p>
          <p>
            <strong>picarto:</strong>
            <Link href="https://picarto.tv/anchoviedraws" spacing="left">
              anchoviedraws
            </Link>
          </p>
        </CollapsibleSection>
        <CollapsibleSection buttonText="//refsheet">
          <div
            css={css`
              padding: 0.5em;
              width: auto;
            `}
          >
            <img
              src={anchovieRefsheet}
              alt="anchovie's refsheet"
              css={css`
                max-width: 100%;
              `}
            />
            <p>character info page coming soon&#8482;</p>
          </div>
        </CollapsibleSection>
      </ResponsiveContainer>
    </StyledAbout>
  );
}

export default About;
