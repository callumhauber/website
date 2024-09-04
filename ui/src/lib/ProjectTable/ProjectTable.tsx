import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ProjectTableProps {
  title: string;
  children: React.ReactNode;
}

const StyledProjectTable = styled.table`
  margin-top: 2em;

  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
`;

const StyledProjectTableHeader = styled.tr`
  border-bottom: 2px solid #e9b05c;

  th {
    padding-left: 1em;
    padding-right: 1em;
    vertical-align: middle;

    height: 3em;
    font-family: sans-serif;
    color: #e9b05c;
    text-align: left;
    background-color: #1e1e23;
  }
`;

export function ProjectTable({ title, children }: ProjectTableProps) {
  return (
    <StyledProjectTable>
      <thead>
        <StyledProjectTableHeader>
          <th colSpan={3}>{title}</th>
        </StyledProjectTableHeader>
      </thead>
      <tbody>{children}</tbody>
    </StyledProjectTable>
  );
}

export default ProjectTable;
