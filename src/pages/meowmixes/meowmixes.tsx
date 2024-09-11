import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Breadcrumb,
  PageHeader,
  ProjectTable,
  ProjectTableRow,
  ResponsiveContainer,
  SweepButton,
  SelectionSection
} from '@website/ui';
import { useState } from 'react';

import { anchovieHeadshot, backgroundTapeTileDark, jacquelynHeadshot } from '../../assets';

const StyledMeowmixes = styled.div``;

const ANCHOVIE = 'anchovie';
const JACQUELYN = 'jacquelyn';

const anchovieTapesConfig = [
  {
    title: '00 Jackmetal:',
    description:
      "some favorite powermetal, post-hardcore, and xyz-metal songs, prior to the project's official start.",
    link: 'https://cloud.lexieloo.com/s/KHJfWi67cfDKkFY'
  },
  {
    title: '01 Hip-Hop Chronology:',
    description:
      "the best of hip-hop from my collection, spanning 1998-2020. captures the genre's evolutions over time.",
    link: 'https://cloud.lexieloo.com/s/7yrir3JRGK4jXfe'
  },
  {
    title: '02 For Melancholy Days:',
    description: 'songs that accompany me through tough times.',
    link: 'https://cloud.lexieloo.com/s/YjJKaWiDaxZQetF'
  },
  {
    title: '03 Macau Nights:',
    description: 'easy listening vibes for cruising the strip at midnight.',
    link: 'https://cloud.lexieloo.com/s/CmYfdN3X4pGjyXm'
  },
  {
    title: '04 [untitled mixtape]:',
    description: 'a transition story set to a soundtrack.',
    link: 'https://cloud.lexieloo.com/s/cXEFX2DSLrMZnQy'
  },
  {
    title: '05 god i wish that were me:',
    description: 'vocalists i admire.',
    link: 'https://cloud.lexieloo.com/s/rd6zE3EMN58yLmq'
  },
  {
    title: "06 sardine's selections:",
    description: 'a special curation by my friend Sardine.',
    link: 'https://cloud.lexieloo.com/s/tT2MgDCJ7aexcgx'
  },
  {
    title: '07 Are Ya Winning, Son?:',
    description: 'some of my favorite videogame tunes.',
    link: 'https://cloud.lexieloo.com/s/FejfWaA3r6Q3Y8k'
  },
  {
    title: '08 The Dusty Corner Bin Of Your Local Record Store:',
    description: 'songs i found by digging around, or by happenstance.',
    link: 'https://cloud.lexieloo.com/s/RA23WP8gSKqzbdi'
  },
  {
    title: '09 Soundcloud Cuts:',
    description: 'undiscovered gems from the algorithm.',
    link: 'https://cloud.lexieloo.com/s/J6niWCPPf3NNEeR'
  },
  {
    title: '10 Why Is There Fur In My Mixtape:',
    description: 'songs from the fandom.',
    link: 'https://cloud.lexieloo.com/s/5yZX5XsEG4Ppkqs'
  },
  {
    title: "11 I Was A Rebellious Loser In Highschool And Now I'm Resigned To Working For The Man:",
    description: 'an anti-war story told (mostly) through punk rock.',
    link: 'https://cloud.lexieloo.com/s/Fjqk8kpgWDnCNqH'
  }
];

const jacquelynTapesConfig = [
  {
    title: '00 Metal4Cats:',
    description:
      'Selection of metal from before the project started, the only mix with no notes.txt or listening order.',
    link: 'https://cloud.lexieloo.com/s/PgPdk3YCsdc6ixr'
  },
  {
    title: '01 Chicken Tenders for the Transjackal Soul:',
    description:
      'Songs related to my transgender experience and furry identity crisis, more details in notes.txt',
    link: 'https://cloud.lexieloo.com/s/LzYFT83n8FfggPZ'
  },
  {
    title: '02 High Seas and Adventure:',
    description: 'Nautical-themed for the first half, followed by a broader adventure narrative.',
    link: 'https://cloud.lexieloo.com/s/SX2ay3QbC5YqJHQ'
  },
  {
    title: '03 I Wanna 3 With U:',
    description: 'Songs about love. In the good way, no breakups etc.',
    link: 'https://cloud.lexieloo.com/s/nrRrgq9CdrqaSKr'
  },
  {
    title: '04 4reign Affairs:',
    description: 'Non-U.S.A artists / songs with non-English lyrics',
    link: 'https://cloud.lexieloo.com/s/Q8ojWYWsN626owT'
  },
  {
    title: '05 (Break-) Ups and Downs:',
    description:
      "Counterpart to B-side Mix 3, this one's about unhealthy relationships and breakups.",
    link: 'https://cloud.lexieloo.com/s/QgoTYnFE3ymPX96'
  },
  {
    title: '06 punk in cubLic:',
    description: 'Various flavors of punk/punk-adjacent music.',
    link: 'https://cloud.lexieloo.com/s/rQ2a8zC6NNRmX85'
  },
  {
    title: '07 A Hip, Hop, and a Wrap:',
    description: 'Hip hop, rap, and related music with a dash of off-topic filler.',
    link: 'https://cloud.lexieloo.com/s/5srNP4zGnYoBQoY'
  },
  {
    title: "08 Rock n' Roll Lifecycle:",
    description: 'Loose concept mix featuring songs about rock culture.',
    link: 'https://cloud.lexieloo.com/s/bbyCAw3gij5naL6'
  },
  {
    title: '09 Go Tell It On The Mixtape:',
    description: 'Storytelling where it feels like the vocalist is narrating to you.',
    link: 'https://cloud.lexieloo.com/s/YtnGLp9iz8JWxB8'
  },
  {
    title: '10 Madness:',
    description: 'Unmitigated anger. A lot of metal in this one.',
    link: 'https://cloud.lexieloo.com/s/RWkRTpdiKyGNjHb'
  },
  {
    title: '11 The Sound Of:',
    description: 'Selections from movie and videogame soundtracks.',
    link: 'https://cloud.lexieloo.com/s/jCWRyQnwosb782P'
  }
];

interface tapeConfigItem {
  title: string;
  description: string;
  link: string;
}

const meowmixRows = (tapeConfig: tapeConfigItem[]) => {
  return tapeConfig.map(({ title, description, link }, index) => {
    return (
      <ProjectTableRow
        button={<SweepButton text="download" link={link} />}
        description={
          <p>
            <b>{title}</b> {description}
          </p>
        }
        key={index}
      />
    );
  });
};

export function Meowmixes() {
  const [activeDeck, setActiveDeck] = useState(ANCHOVIE);
  return (
    <StyledMeowmixes>
      <title>meowmixes</title>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundTapeTileDark});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="meowmixes" subheading="mixtapes between friends!" />
      <SelectionSection
        left={<SweepButton text={'A'} onClick={() => setActiveDeck(ANCHOVIE)} />}
        leftImage={anchovieHeadshot}
        right={<SweepButton text={'B'} onClick={() => setActiveDeck(JACQUELYN)} />}
        rightImage={jacquelynHeadshot}
      />
      <ResponsiveContainer>
        <ProjectTable title={`//${activeDeck}'s tapes`}>
          {meowmixRows(activeDeck === ANCHOVIE ? anchovieTapesConfig : jacquelynTapesConfig)}
        </ProjectTable>
      </ResponsiveContainer>
    </StyledMeowmixes>
  );
}

export default Meowmixes;
