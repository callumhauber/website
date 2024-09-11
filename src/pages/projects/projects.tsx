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

import {
  backgroundXTile,
  baconboard,
  target,
  barstool,
  tapetile,
  cp2077,
  forza,
  notnft,
  aspdt,
  fh4guide
} from '../../assets';

/* eslint-disable-next-line */
export interface ProjectsProps {}

const StyledProjects = styled.div``;

export function Projects(props: ProjectsProps) {
  return (
    <StyledProjects>
      <title>projects</title>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundXTile});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="projects" subheading="where non-art activities live" />
      <ResponsiveContainer>
        <ProjectTable title="//go on, click one :3">
          <ProjectTableRow
            button={
              <SweepButton text="baconboard" link="https://github.com/callumhauber/baconboard" />
            }
            icon={baconboard}
            iconAlt="baconboard logo"
            description="a tasty handwire keyboard you can make yourself. features a unique ortholinear layout with a southpaw numpad, uniform modifier keys, and a line nav. powered by QMK firmware."
          />
          <ProjectTableRow
            button={<SweepButton text="APSDT" link={aspdt} />}
            icon={target}
            iconAlt="target icon"
            description="a printable paper target for all your shooting needs. revised 2023 edition!"
          />
          <ProjectTableRow
            button={
              <SweepButton
                text="100hr stool"
                link="https://medium.com/@anchoviewrites/the-100-hour-bar-stool-ce8c0f858f24"
              />
            }
            icon={barstool}
            iconAlt="barstool icon"
            description="my first woodworking project, a CNC bar stool. instructions included!"
          />
          <ProjectTableRow
            button={<SweepButton text="meowmixes" nav="meowmixes" />}
            icon={tapetile}
            iconAlt="cassette tape icon"
            description="a collection of mixtapes exchanged with my friend jacquelyn! each mix is 60-70min and has liner notes."
          />
          <ProjectTableRow
            button={
              <SweepButton
                text="cp2077 bad?"
                link="https://medium.com/@anchoviewrites/on-cyberpunk-2077-1e1354e48676"
              />
            }
            icon={cp2077}
            iconAlt="cp2077 icon"
            description="a designer's perspective on cyberpunk 2077."
          />
          <ProjectTableRow
            button={<SweepButton text="fh4 guide" link={fh4guide} />}
            icon={forza}
            iconAlt="forza icon"
            description={
              <p>
                <strong>the not particularly essential forza horizon 4 tuning guide!</strong>
                intended for novice tuners to learn the ropes and best practices.
              </p>
            }
          />
          <ProjectTableRow
            button={<SweepButton text="not-nft" link="https://github.com/anchovie-codes/not-NFT" />}
            icon={notnft}
            iconAlt="not-nft icon"
            description="a small steganography project with my husband, Marzz. designed as a simple, eco-friendly alternative to NFTs."
          />
        </ProjectTable>
      </ResponsiveContainer>
    </StyledProjects>
  );
}

export default Projects;
