import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SelectionSectionProps {
  left: React.ReactNode;
  leftImage: string;
  right: React.ReactNode;
  rightImage: string;
}

const StyledSelectionSection = styled.div`
  max-width: 30em;
  height: 4em;
  margin: auto;
  vertical-align: middle;
  overflow: hidden;
  margin: 2em auto 4em;

  @media screen and (max-width: 768px) {
    .column {
      width: 100%;
    }
    .floatContainer {
      width: 100%;
    }
    table {
      width: 100%;
    }
    .responsiveContainer {
      width: 100%;
    }
    .responsiveContainer #navbox {
      max-width: 85%;
    }
  }
`;

const StyledSelectionSectionLeft = styled.div`
  float: left;
  width: auto;
  height: 4em;
  padding-right: 0.5em;

  button {
    margin: auto;
    width: 4em;
  }

  img {
    height: 4em;
    border-radius: 6px;
  }
`;

const StyledSelectionSectionRight = styled.div`
  float: right;
  width: auto;
  height: 4em;
  padding-left: 0.5em;

  button {
    margin: auto;
    width: 4em;
  }

  img {
    height: 4em;
    border-radius: 6px;
  }
`;

export function SelectionSection({ left, leftImage, right, rightImage }: SelectionSectionProps) {
  return (
    <StyledSelectionSection>
      <StyledSelectionSectionLeft>
        <img alt="A side" src={leftImage} />
      </StyledSelectionSectionLeft>
      <StyledSelectionSectionLeft>{left}</StyledSelectionSectionLeft>
      <StyledSelectionSectionRight>
        <img alt="B side" src={rightImage} />
      </StyledSelectionSectionRight>
      <StyledSelectionSectionRight>{right}</StyledSelectionSectionRight>
    </StyledSelectionSection>
  );
}

export default SelectionSection;
