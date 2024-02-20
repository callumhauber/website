import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { backgroundGlitch } from '../../assets';

/* eslint-disable-next-line */
export interface CollapsibleSectionProps {
  buttonText: string;
  children: React.ReactNode;
}

const SectionButton = styled.button`
  height: 4em;
  background: rgba(0, 0, 0, 0.6);
  font-weight: 600;

  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 18pt;
  opacity: 1;
  margin-bottom: 0;
  margin-top: 0;

  .active,
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  &:after {
    content: '\\02795'; /* Unicode character for "plus" sign (+) */
    font-size: 14px;
    color: #ffffff;
    float: right;
    margin-left: 5px;
  }
`;

const active = css`
  background: rgba(0, 0, 0, 0.9);
  &::after {
    content: '\\2796'; /* Unicode character for "minus" sign (-) */
  }
`;

const SectionContent = styled.div`
  margin: auto;
  width: 100%;
  text-align: left;
  background-image: url(${backgroundGlitch});
  padding-bottom: 1em;
  padding-top: 0.5em;
`;

export function CollapsibleSection({ buttonText, children }: CollapsibleSectionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <SectionButton
        css={isActive ? active : ``}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {buttonText}
      </SectionButton>
      {isActive && <SectionContent>{children}</SectionContent>}
    </>
  );
}

export default CollapsibleSection;
