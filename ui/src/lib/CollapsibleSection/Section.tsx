import styled from '@emotion/styled';

import { backgroundGlitch } from '../../assets';

/* eslint-disable-next-line */
export interface SectionProps {
  children: React.ReactNode;
}

const SectionContent = styled.div`
  margin: auto;
  width: 100%;
  text-align: left;
  background-image: url(${backgroundGlitch});
  padding-bottom: 1em;
  padding-top: 0.5em;
`;

export function Section({ children }: SectionProps) {
  return <SectionContent>{children}</SectionContent>;
}

export default Section;
