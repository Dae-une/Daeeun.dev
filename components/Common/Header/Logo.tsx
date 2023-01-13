import Link from 'next/link';
import styled from '@emotion/styled';

const Logo = () => {
  return (
    <Link href="/">
      <IconText>Dae-eun</IconText>
    </Link>
  );
};

export default Logo;

const IconText = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  color: ${(props) => props.theme.colors.white[100]};
`;
