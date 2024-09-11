import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Breadcrumb,
  PageHeader,
  ResponsiveContainer,
  Section,
  Heading,
  CollapsibleSection,
  Link
} from '@website/ui';

import { backgroundXTile, banner01, banner02, banner03 } from '../../assets';

/* eslint-disable-next-line */
export interface CommissionsProps {}

const StyledCommissions = styled.div``;

export function Commissions(props: CommissionsProps) {
  return (
    <StyledCommissions>
      <title>commissions</title>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundXTile});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="commissions" subheading="so, you want to give me money..." />
      <ResponsiveContainer>
        <Section>
          <Heading
            css={css`
              padding: 0.5em;
            `}
            size={2}
            text="//what can i make?"
          />

          <p>
            i can't make everything, but i can make a lot! check out the categories below to see
            what i've done in the past. alternatively, if you're already working on a project and
            need help, i love to collab.
          </p>
        </Section>
        <CollapsibleSection buttonText="//vector art">
          <img
            src={banner01}
            alt="vector art examples"
            css={css`
              width: 100%;
            `}
          />
          <p>
            great for 3d printing, laser engraving, PCB tracing, web assets, stickers, and so much
            more! vectors are infinitely scalable and easily converted into machine toolpaths. if
            you've ever wanted to slap your fursona's face on everything you own, this is a great
            start.
          </p>
        </CollapsibleSection>
        <CollapsibleSection buttonText="//illustration">
          <img
            src={banner02}
            alt="illustration examples"
            css={css`
              width: 100%;
            `}
          />
          <p>
            vector or raster, more technical art is my speciality. from geometric designs inspired
            by circuitry and mechanical forms to manga-style drift furries, i'll bring any idea to
            life.
          </p>
        </CollapsibleSection>
        <CollapsibleSection buttonText="//design">
          <img
            src={banner03}
            alt="design examples"
            css={css`
              width: 100%;
            `}
          />
          <p>
            have a bigger project in mind? CAD modeling? large-format poster prints? i'll bring your
            design from napkin sketch to final form, or any stage along the way.
          </p>
        </CollapsibleSection>
        <Section>
          {/* contact info */}
          <Heading
            css={css`
              padding: 0.5em;
            `}
            size={2}
            text="//contact info"
          />
          <p>
            <strong>telegram:</strong>
            <Link href="https://t.me/anchovie" spacing="left">
              @anchovie
            </Link>
          </p>
          <p>
            <strong>tumblr:</strong>
            <Link href="https://www.tumblr.com/anchoviedraws" spacing="left">
              anchoviedraws
            </Link>
          </p>
          {/* deliverables */}
          <Heading
            css={css`
              padding: 0.5em;
            `}
            size={2}
            text="//what do you get?"
          />
          <p>
            when you commission me, you get everything: the final piece (in whatever formats needed){' '}
            <strong>and all source files</strong>. i love seeing my work reused, repurposed, and
            modified. if you're a maker and want to alter or re-export a commission for future
            projects, i want to make that as easy as possible for you.
          </p>
          {/* terms of service */}
          <Heading
            css={css`
              padding: 0.5em;
            `}
            size={2}
            text="//terms of service"
          />
          <p>rate: $30 USD per hour</p>
          <p>i only accept paypal</p>
          <p>price estimates can be provided</p>
          <p>
            work is done on a first come, first serve basis. i have a queue on
            <Link href="https://trello.com/b/3es4UREm/anchovies-commission-queue" spacing="left">
              trello
            </Link>
            .
          </p>
          <p>
            for illustration work, you can request revisions during the initial sketch. once the
            sketch is approved, i will finish the piece. subsequent revisions will cost extra for
            the hours needed to complete them.
          </p>
          <p>
            a watermarked lo-fi preview will be provided for final approval. payment is due in
            exchange for the final piece and all source files.
          </p>
          <p>
            if you want to individualize your commission from the visually-identical copies i post
            online, i can encrypt it with
            <Link href="https://github.com/anchovie-codes/not-NFT" spacing="left">
              not-NFT
            </Link>
            , an ultra-lightweight steganography tool (seriously, you can run it yourself, it's like
            50 lines of code). this service is free of charge!
          </p>
          <p>
            art is my hobby. i work a full-time job during the week. completion times are dependent
            on my schedule. i don't accept rush jobs - zero exceptions.
          </p>
          <p>
            my work is licensed under a
            <Link
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
              spacing="left"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License
            </Link>
            . you can create derivative work and sell it, but you must attribute me as the source
            creator and publish your work under a similar license.
            <strong> you may NOT mint NFTs of my work</strong>, as it is non-derivative.
          </p>
        </Section>
      </ResponsiveContainer>
    </StyledCommissions>
  );
}

export default Commissions;
