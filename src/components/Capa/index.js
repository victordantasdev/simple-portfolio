import React from 'react';
import styled from 'styled-components';
import Link from '../common/Link';
import Text from '../foundation/Text';
import WrapperCapa from './WrapperCapa';

const H1 = styled.h1`
  margin: 0;
  color: #fff;
`;

export default function Capa() {
  return (
    <WrapperCapa>
      <Link href="/">
        <H1>
          Victor Dantas
        </H1>
      </Link>

      <Text tag="p">
        Portfolio
      </Text>
    </WrapperCapa>
  );
}
