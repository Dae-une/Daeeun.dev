import Link from 'next/link';
import styled from '@emotion/styled';

const Logo = () => {
  return (
    <IconText href="/">
      <span>Dae-eun.</span>
    </IconText>
  );
};

export default Logo;

const IconText = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  color: inherit;
`;
