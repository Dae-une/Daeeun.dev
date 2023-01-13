import styled from '@emotion/styled';
import Link from 'next/link';

const About = () => {
  return (
    <IconText href="https://portfolio-dae-une.vercel.app/" target="_blank" rel="noreferrer">
      <span>About.</span>
    </IconText>
  );
};

export default About;

const IconText = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: inherit;
`;
