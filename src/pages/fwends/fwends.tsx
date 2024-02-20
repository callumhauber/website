import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breadcrumb, PageHeader } from '@website/ui';

import { backgroundHappy } from '../../assets';

/* eslint-disable-next-line */
export interface FwendsProps {}

const StyledFwends = styled.div``;

export function Fwends(props: FwendsProps) {
  return (
    <StyledFwends>
      <Global
        styles={css`
          body {
            background-image: url(${backgroundHappy});
          }
        `}
      />
      <Breadcrumb />
      <PageHeader heading="fwends!!" subheading="folks you should know about" />
    </StyledFwends>
  );
}

export default Fwends;
