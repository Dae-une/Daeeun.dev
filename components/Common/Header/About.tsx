import styled from '@emotion/styled';
import Link from 'next/link';

const About = () => {
  return (
    <Link href="https://portfolio-dae-une.vercel.app/" target="_blank" rel="noreferrer">
      <IconText>About.</IconText>
    </Link>
  );
};

export default About;

const IconText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white[100]};
`;
