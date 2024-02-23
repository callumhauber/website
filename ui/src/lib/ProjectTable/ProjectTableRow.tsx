import styled from '@emotion/styled';
import React from 'react';

/* eslint-disable-next-line */
export interface ProjectTableRowProps {
  button: React.ReactNode;
  icon: string;
  iconAlt: string;
  description: string | React.ReactNode;
}

const StyledProjectTableRow = styled.tr`
  border-bottom: 2px solid #e9b05c;

  td {
    background-color: #43434a;
    height: auto;
    border-bottom: 2px;
    border-bottom-color: #e9b05c;
  }
`;

const StyledProjectTableButtonCell = styled.td`
  text-align: center;
  width: 10em;
`;

const StyledProjectTableIconCell = styled.td`
  div {
    padding: 0.5em;
  }

  img {
    height: 80px;
    border-radius: 6px;
  }
`;

const StyledProjectTableDescriptionCell = styled.td`
  p {
    color: #ffffff;
    font-family: monospace;
    font-size: 14pt;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

export function ProjectTableRow({ button, icon, iconAlt, description }: ProjectTableRowProps) {
  return (
    <StyledProjectTableRow>
      <StyledProjectTableButtonCell>{button}</StyledProjectTableButtonCell>
      <StyledProjectTableIconCell>
        <div>
          <img alt={iconAlt} src={icon}></img>
        </div>
      </StyledProjectTableIconCell>
      <StyledProjectTableDescriptionCell>
        <p>{description}</p>
      </StyledProjectTableDescriptionCell>
    </StyledProjectTableRow>
  );
}

export default ProjectTableRow;