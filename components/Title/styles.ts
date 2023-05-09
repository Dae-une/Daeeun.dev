import styled from '@emotion/styled';

export const TitleFrame = styled.div`
  margin: 4rem 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: center;
`;
export const TitleDesc = styled.div`
  font-size: 1.4rem;
  font-weight: 200;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-weight: 700;
`;

export const UnderLine = styled.hr`
  width: 50px;
  height: 3px;
  margin-top: 2rem;
  /* background-color: ${(props) => props.theme.colors.white[1]}; */
  border: none;
`;
