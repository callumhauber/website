import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeadingProps {
  size: number;
  text: string;
  className?: string;
}

const H1 = styled.h1`
  color: #ffffff;
  font-family: sans-serif;
  font-size: 36pt;
`;

const H2 = styled.h2`
  color: #ffffff;
  font-family: sans-serif;
  font-size: 18pt;
`;

export function Heading({ size, text, className }: HeadingProps) {
  switch (size) {
    case 1:
      return <H1 className={className}>{text}</H1>;
    case 2:
      return <H2 className={className}>{text}</H2>;
  }
}

export default Heading;
