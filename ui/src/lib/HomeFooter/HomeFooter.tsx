import styled from '@emotion/styled';
import { css } from '@emotion/react';
import HomeFooterBadge from './HomeFooterBadge';
import { web14, neocities, sayNoToWeb3, signature } from '../../assets';

/* eslint-disable-next-line */
export interface HomeFooterProps {}

const StyledHomeFooter = styled.div`
  display: block;
  text-align: center;
`;

export function HomeFooter(props: HomeFooterProps) {
  return (
    <StyledHomeFooter>
      <HomeFooterBadge href="http://www.mabsland.com/Adoption.html">
        <img alt="web 14+ badge" src={web14} />
      </HomeFooterBadge>
      <HomeFooterBadge href="http://creativecommons.org/licenses/by-sa/4.0/">
        <img
          alt="Creative Commons License badge"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
        />
      </HomeFooterBadge>
      <HomeFooterBadge href="">
        <img alt="signature" src={signature} />
      </HomeFooterBadge>
      <HomeFooterBadge href="http://users3.smartgb.com/g/g.php?a=s&i=g36-34199-d1">
        <img
          alt="guestbook badge"
          src="http://extras3.smartgb.com/b/gb_80x40.gif"
          width="88"
          height="31"
        />
      </HomeFooterBadge>
      <HomeFooterBadge href="https://neocities.org">
        <img alt="neocities badge" src={neocities} />
      </HomeFooterBadge>
      <HomeFooterBadge href="https://yesterweb.org/no-to-web3/">
        <img alt="so no to web3 badge" src={sayNoToWeb3} />
      </HomeFooterBadge>
    </StyledHomeFooter>
  );
}

export default HomeFooter;
