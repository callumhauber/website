import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

import { backgroundXTile } from '../../assets';

/* eslint-disable-next-line */
export interface CommissionsProps {}

const StyledCommissions = styled.div``;

export function Commissions(props: CommissionsProps) {
  return (
    <StyledCommissions>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundXTile});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="commissions" subheading="so, you want to give me money..." />
    </StyledCommissions>
  );
}

export default Commissions;
