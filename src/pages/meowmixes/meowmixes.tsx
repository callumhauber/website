import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Breadcrumb,
  PageHeader,
  ProjectTable,
  ProjectTableRow,
  ResponsiveContainer,
  SweepButton
} from '@website/ui';

import { backgroundTapeTileDark } from '../../assets';

const StyledMeowmixes = styled.div`
  color: pink;
`;

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
  return (
    <StyledMeowmixes>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundTapeTileDark});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="meowmixes" subheading="mixtapes between friends!" />
      <ResponsiveContainer>
        <ProjectTable title="//anchovie's tapes">{meowmixRows(anchovieTapesConfig)}</ProjectTable>
      </ResponsiveContainer>
    </StyledMeowmixes>
  );
}

export default Meowmixes;
