/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { useMatches } from 'react-router-dom';

/* eslint-disable-next-line */
export interface BreadcrumbProps {}

const Nav = styled.div`
  background-color: #1e1e23;
  font-family: sans-serif;
  font-size: 14pt;
  font-weight: 600;
  color: #ffffff;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin: 0;

  ol {
    list-style: none;
  }

  ol li {
    display: inline;
    padding-right: 0.25em;
  }

  ol li a:hover {
    text-decoration: underline;
  }
`;

type Match = {
  id: string;
  pathname: string;
  data: unknown;
  params: any;
  handle: any;
};

export function Breadcrumb(props: BreadcrumbProps) {
  const matches: Match[] = useMatches();
  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <Nav>
      <ol>
        {crumbs.map(({ link, text }, index, crumbs) => (
          <Fragment key={`${index}-fragment`}>
            <li key={index}>{crumbs.length === index + 1 ? text : link}</li>
            {index !== crumbs.length - 1 && <li key={`${index}-slash`}> / </li>}
          </Fragment>
        ))}
      </ol>
    </Nav>
  );
}

export default Breadcrumb;
