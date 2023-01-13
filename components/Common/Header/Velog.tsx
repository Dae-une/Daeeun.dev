import Link from 'next/link';
import styled from '@emotion/styled';

const Velog = () => {
  return (
    <IconText href="https://velog.io/@dae_eun2">
      <span>Velog.</span>
    </IconText>
  );
};

export default Velog;

const IconText = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: inherit;
`;
